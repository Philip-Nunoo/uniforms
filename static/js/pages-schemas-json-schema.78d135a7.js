(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"./pages/Schemas/JSONSchema.mdx":function(e,n,o){"use strict";o.r(n),o.d(n,"default",function(){return f});var r=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),s=o.n(r),t=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/classCallCheck.js"),a=o.n(t),m=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/createClass.js"),d=o.n(m),i=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),l=o.n(i),c=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/getPrototypeOf.js"),u=o.n(c),p=o("./node_modules/docz-core/node_modules/@babel/runtime/helpers/inherits.js"),h=o.n(p),b=o("./node_modules/react/index.js"),g=o.n(b),j=o("./node_modules/@mdx-js/tag/dist/index.js"),f=function(e){function n(e){var o;return a()(this,n),(o=l()(this,u()(n).call(this,e))).layout=null,o}return h()(n,e),d()(n,[{key:"render",value:function(){var e=this.props,n=e.components;s()(e,["components"]);return g.a.createElement(j.MDXTag,{name:"wrapper",components:n},g.a.createElement(j.MDXTag,{name:"h1",components:n,props:{id:"json-schema-definition"}},"JSON schema definition"),g.a.createElement(j.MDXTag,{name:"pre",components:n},g.a.createElement(j.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import Ajv from 'ajv';\nimport {JSONSchemaBridge} from 'uniforms-bridge-json-schema';\n\nconst schema = {\n  title: 'Person',\n  type: 'object',\n  properties: {\n    firstName: {\n      type: 'string'\n    },\n    lastName: {\n      type: 'string'\n    },\n    age: {\n      description: 'Age in years',\n      type: 'integer',\n      minimum: 0\n    }\n  },\n  required: ['firstName', 'lastName']\n};\n\nconst validator = new Ajv({allErrors: true, useDefaults: true}).compile(schema);\n\nconst schemaValidator = model => {\n  validator(model);\n\n  if (validator.errors && validator.errors.length) {\n    throw {details: validator.errors};\n  }\n};\n\nconst bridge = new JSONSchemaBridge(schema, schemaValidator);\n\n// Later...\n\n<ValidatedForm schema={bridge} />;\n")))}}]),n}(g.a.Component)}}]);
//# sourceMappingURL=pages-schemas-json-schema.7bdcc2e35d2d8e0f9848.js.map