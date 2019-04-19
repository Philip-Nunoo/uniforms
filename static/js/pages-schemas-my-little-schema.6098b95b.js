(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"./pages/Schemas/MyLittleSchema.mdx":function(e,n,r){"use strict";r.r(n),r.d(n,"default",function(){return w});var o=r("./node_modules/docz-core/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),a=r.n(o),s=r("./node_modules/docz-core/node_modules/@babel/runtime/helpers/classCallCheck.js"),t=r.n(s),l=r("./node_modules/docz-core/node_modules/@babel/runtime/helpers/createClass.js"),i=r.n(l),m=r("./node_modules/docz-core/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),d=r.n(m),c=r("./node_modules/docz-core/node_modules/@babel/runtime/helpers/getPrototypeOf.js"),u=r.n(c),p=r("./node_modules/docz-core/node_modules/@babel/runtime/helpers/inherits.js"),h=r.n(p),g=r("./node_modules/react/index.js"),b=r.n(g),_=r("./node_modules/@mdx-js/tag/dist/index.js"),w=function(e){function n(e){var r;return t()(this,n),(r=d()(this,u()(n).call(this,e))).layout=null,r}return h()(n,e),i()(n,[{key:"render",value:function(){var e=this.props,n=e.components;a()(e,["components"]);return b.a.createElement(_.MDXTag,{name:"wrapper",components:n},b.a.createElement(_.MDXTag,{name:"h1",components:n,props:{id:"example-mylittleschema"}},"Example: ",b.a.createElement(_.MDXTag,{name:"inlineCode",components:n,parentName:"h1"},"MyLittleSchema")),b.a.createElement(_.MDXTag,{name:"p",components:n},b.a.createElement(_.MDXTag,{name:"strong",components:n,parentName:"p"},"Note:")," This is a very basic schema just to show how it works and how you can create your own schema bridges."),b.a.createElement(_.MDXTag,{name:"pre",components:n},b.a.createElement(_.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import Bridge from 'uniforms/Bridge';\n\nclass MyLittleSchema extends Bridge {\n  constructor(schema, validator) {\n    super();\n\n    this.schema = schema;\n    this.validator = validator;\n  }\n\n  getError(name, error) {\n    return error && error[name];\n  }\n\n  getErrorMessage(name, error) {\n    return error && error[name];\n  }\n\n  getErrorMessages(error) {\n    return error ? Object.keys(this.schema).map(field => error[field]) : [];\n  }\n\n  getField(name) {\n    return this.schema[name.replace(/.d+/g, '.$')];\n  }\n\n  getType(name) {\n    return this.schema[name.replace(/.d+/g, '.$')].__type__;\n  }\n\n  getProps(name) {\n    return this.schema[name.replace(/.d+/g, '.$')];\n  }\n\n  getInitialValue(name) {\n    return this.schema[name.replace(/.d+/g, '.$')].initialValue;\n  }\n\n  getSubfields(name) {\n    return name\n      ? this.schema[name.replace(/.d+/g, '.$')].subfields || []\n      : Object.keys(this.schema).filter(field => field.indexOf('.') === -1);\n  }\n\n  getValidator() {\n    return this.validator;\n  }\n}\n\nconst bridge = new MyLittleSchema(\n  {\n    login: {\n      __type__: String,\n      required: true,\n      initialValue: '',\n      label: 'Login'\n    },\n    password1: {\n      __type__: String,\n      required: true,\n      initialValue: '',\n      label: 'Password'\n    },\n    password2: {\n      __type__: String,\n      required: true,\n      initialValue: '',\n      label: 'Password (again)'\n    }\n  },\n  model => {\n    const error = {};\n\n    if (!model.login) {\n      error.login = 'Login is required!';\n    } else if (model.login.length < 5) {\n      error.login = 'Login has to be at least 5 characters long!';\n    }\n\n    if (!model.password1) {\n      error.password1 = 'Password is required!';\n    } else if (model.password1.length < 10) {\n      error.login = 'Password has to be at least 10 characters long!';\n    }\n\n    if (model.password1 !== model.password2) {\n      error.password1 = 'Passwords mismatch!';\n    }\n\n    if (Object.keys(error).length) {\n      throw error;\n    }\n  }\n);\n\n<AutoForm schema={bridge} />;\n")))}}]),n}(b.a.Component)}}]);
//# sourceMappingURL=pages-schemas-my-little-schema.7bdcc2e35d2d8e0f9848.js.map