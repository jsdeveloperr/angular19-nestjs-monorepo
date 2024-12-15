import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

export const LoadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService); // LoadingService'i inject ediyoruz
  loadingService.show(); // API isteği başladığında loading aktif

  return next(req).pipe(
    finalize(() => loadingService.hide()) // İstek tamamlandığında loading kapatılır
  );
};
