"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var forms_1 = require('@angular/forms');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule, [forms_1.disableDeprecatedForms(), forms_1.provideForms()]);
//# sourceMappingURL=main.js.map