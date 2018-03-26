System.register(["angular2/core","./contact.service","angular2/router"],function(t){var e,n,o,c,r=this&&this.__decorate||function(t,e,n,o){var c,r=arguments.length,a=3>r?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(c=t[i])&&(a=(3>r?c(a):r>3?c(e,n,a):c(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0};return{setters:[function(t){e=t},function(t){n=t},function(t){o=t}],execute:function(){c=function(){function t(t,e){this._contactService=t,this._router=e,this.newContact={id:"",firstname:"",lastname:"",email:""}}return t.prototype.onAddContact=function(){this.newContact.id=Math.floor(100*Math.random()+1).toString(),console.log(this.newContact),this._contactService.insertContact(this.newContact),this._router.navigate(["Contacts"])},t=r([e.Component({templateUrl:"../dev/contacts/newcontact.component.html",providers:[n.ContactService],styles:["\n      .ng-invalid{\n        border:1px solid red;\n      }\n    "]}),a("design:paramtypes",[n.ContactService,o.Router])],t)}(),t("NewContactComponent",c)}}});