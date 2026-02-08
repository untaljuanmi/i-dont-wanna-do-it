import { ComponentType, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { inject, Injectable, Injector } from '@angular/core';

import { MyDialogConfig } from '../../interfaces';
import { MyDialogRef } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class MyDialogService {
  private _overlay = inject(Overlay);
  private _injector = inject(Injector);

  open<T>(component: ComponentType<T>, config?: MyDialogConfig): MyDialogRef {
    const positionStrategy = this._overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayRef = this._overlay.create({
      positionStrategy,
      hasBackdrop: config?.hasBackdrop ?? true,
      backdropClass: 'my-overlay-backdrop',
      panelClass: 'my-dialog-panel',
      minWidth: config?.minWidth ?? 'auto',
      width: config?.width ?? 'auto',
      maxWidth: config?.maxWidth ?? '100%',
      minHeight: config?.minHeight ?? 'auto',
      height: config?.height ?? 'auto',
      maxHeight: config?.maxHeight ?? '100%',
    });

    const dialogRef = new MyDialogRef(overlayRef);

    if (config?.canCloseObBackdropClick) {
      dialogRef.listenBackdropClick();
    }

    const injector = Injector.create({
      parent: this._injector,
      providers: [
        { provide: MyDialogRef, useValue: dialogRef },
        { provide: 'MY_DIALOG_DATA', useValue: config?.data },
      ],
    });

    const portal = new ComponentPortal<T>(component, null, injector);

    overlayRef.attach(portal);

    return dialogRef;
  }
}
