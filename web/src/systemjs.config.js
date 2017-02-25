(function (global) {
    System.config({
        baseURL: 'dist/',
        paths: {
            'npm:': 'lib/',
            'bower:': 'lib/'
        },
        map: {
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            'reflect-metadata': 'npm:reflect-metadata/Reflect.js',
            'rxjs': 'npm:rxjs',
            'environments/environment': 'app/environments/environment.js',
            'app/app.module': 'app/app.module.js',
            'jquery': 'bower:jquery/dist/jquery.min.js'
        },
        packages: {
          app: {
              main: '../main.js',
              defaultExtension: 'js'
          },
          environments: {
              defaultExtension: 'js'
          },
          rxjs: {
              defaultExtension: 'js'
          }
        }
    });
})(this);
