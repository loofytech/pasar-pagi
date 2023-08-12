"use strict";
(() => {
var exports = {};
exports.id = 915;
exports.ids = [915];
exports.modules = {

/***/ 8114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fproduct_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproduct_2F_5Bslug_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2Fproduct_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproduct_2F_5Bslug_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/product/[slug].tsx
var _slug_namespaceObject = {};
__webpack_require__.r(_slug_namespaceObject);
__webpack_require__.d(_slug_namespaceObject, {
  "default": () => (ProductDetail),
  getServerSideProps: () => (getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(5244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./pages/_document.tsx
var _document = __webpack_require__(3162);
// EXTERNAL MODULE: ./pages/_app.tsx
var _app = __webpack_require__(4178);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./layouts/AppLayout.tsx + 2 modules
var AppLayout = __webpack_require__(1936);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./utils/globalFunction.ts
var globalFunction = __webpack_require__(5129);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
;// CONCATENATED MODULE: ./pages/product/[slug].tsx









function ProductDetail({ data }) {
    const [quantity, setQuantity] = (0,external_react_.useState)(1);
    const [openNote, setOpenNote] = (0,external_react_.useState)(false);
    const [note, setNote] = (0,external_react_.useState)("");
    const router = (0,router_.useRouter)();
    const handleCloseNote = ()=>{
        setOpenNote(false);
        setNote("");
    };
    const handleCheckout = ()=>{
        router.push("/product/checkout/");
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(AppLayout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(external_next_seo_.NextSeo, {
                title: `${data.product_name}`,
                description: `Loofytech adalah jasa, dibangun oleh tenaga profesional dan berpengalaman dibidangnya, cukup dengan modal 500.000`,
                openGraph: {
                    title: `${data.product_name}`,
                    description: `Loofytech adalah jasa, dibangun oleh tenaga profesional dan berpengalaman dibidangnya, cukup dengan modal 500.000`,
                    url: `https://pasar-pagi.loofytech.com${router.asPath}`,
                    images: [
                        {
                            url: `https://pasar-pagi.loofytech.com/pasar_pagi.png`
                        }
                    ],
                    siteName: `${data.product_name}`
                },
                additionalMetaTags: [
                    {
                        property: "keywords",
                        content: "loofytech, jasa it loofytech, jasa website loofytech, jasa aplikasi loofytech, jasa design produk loofytech, loofytech konsultan, loofytech consultant, aplikasi kantor loofytech, aplikasi kasir loofytech, aplikasi pembayaran loofytech, aplikasi pergudangan loofytech, it loofy, loofytech digital"
                    },
                    {
                        name: "application-name",
                        content: `${data.product_name}`
                    },
                    {
                        httpEquiv: "x-ua-compatible",
                        content: "IE=edge; chrome=1"
                    }
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "w-full md:w-3/4 mx-auto mt-5 px-5 md:px-0",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "text-sm flex items-center select-none",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/",
                            className: "hidden md:block text-primary",
                            children: "Beranda"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(bi_.BiChevronRight, {
                            size: 20,
                            className: "hidden md:block"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/product",
                            className: "hidden md:block text-primary whitespace-nowrap",
                            children: "Produk Siswa"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(bi_.BiChevronRight, {
                            size: 20,
                            className: "hidden md:block"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: "truncate",
                            children: data.product_name
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex gap-5 md:gap-10 w-full md:w-3/4 mx-auto mt-5 mb-10 px-5 md:px-0 flex-col md:flex-row",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        style: {
                            height: 400
                        },
                        className: "w-full md:w-80 static md:sticky top-28 overflow-hidden rounded-lg",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: data.photo_detail,
                            width: 320,
                            height: 400,
                            className: "w-full md:w-80",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                className: "text-lg font-bold leading-5",
                                children: data.product_name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "text-2xl text-primary font-bold mt-3",
                                children: [
                                    "Rp",
                                    (0,globalFunction/* formatIDR */.j)(data.product_price)
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-sm mt-5 md:mt-10",
                                dangerouslySetInnerHTML: {
                                    __html: data.product_description
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "w-full md:w-64",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "w-full sticky top-28 bg-white border rounded-md p-3 rounded-lg",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text-sm font-bold",
                                    children: "Atur jumlah dan catatan"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "flex items-center gap-5 mt-3",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                type: "button",
                                                onClick: ()=>setQuantity(quantity <= 1 ? 1 : quantity - 1),
                                                className: "absolute top-0 bottom-0 left-2 flex items-center cursor-pointer",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(bi_.BiMinusCircle, {
                                                    size: 24,
                                                    className: `${quantity == 1 ? "text-gray-400" : "text-primary"}`
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "text",
                                                value: quantity,
                                                className: "px-10 text-center h-10 border w-full outline-none rounded-lg select-none",
                                                onKeyPress: (event)=>{
                                                    if (!/[0-9]/.test(event.key)) {
                                                        return event.preventDefault();
                                                    }
                                                },
                                                onChange: (event)=>setQuantity(parseInt(event.target.value)),
                                                readOnly: true
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                type: "button",
                                                onClick: ()=>setQuantity(quantity + 1),
                                                className: "absolute top-0 bottom-0 right-2 flex items-center cursor-pointer",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(bi_.BiPlusCircle, {
                                                    size: 24,
                                                    className: `${quantity >= 1 ? "text-primary" : "text-gray-400"}`
                                                })
                                            })
                                        ]
                                    })
                                }),
                                !openNote && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mt-2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        type: "button",
                                        onClick: ()=>setOpenNote(true),
                                        className: "flex gap-0.5 items-center select-none",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(bi_.BiSolidPencil, {
                                                size: 16,
                                                className: "text-primary"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "text-primary text-xs whitespace-nowrap font-bold",
                                                children: "Tambah Catatan"
                                            })
                                        ]
                                    })
                                }),
                                openNote && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "mt-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "text",
                                            placeholder: "Contoh: Warna Putih",
                                            className: "w-full border text-sm h-10 rounded-lg select-none outline-none px-3",
                                            value: note,
                                            onChange: (evt)=>setNote(evt.target.value)
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            type: "button",
                                            className: "ml-1 text-xs font-bold text-primary",
                                            onClick: handleCloseNote,
                                            children: "Batalkan Catatan"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "mt-5 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "text-sm text-gray-400",
                                            children: "Subtotal"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: "font-bold text-lg",
                                            children: [
                                                "Rp",
                                                (0,globalFunction/* formatIDR */.j)(data.product_price * quantity)
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "mt-2 flex items-center flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            type: "button",
                                            className: "w-full border-2 border-primary bg-primary text-white text-sm font-bold h-10 rounded-lg",
                                            children: "KERANJANG"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            type: "button",
                                            className: "w-full border-2 border-primary bg-white text-primary text-sm font-bold h-10 rounded-lg",
                                            onClick: handleCheckout,
                                            children: "BELI LANGSUNG"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps(context) {
    const request = await fetch("http://localhost:3000/sample/product.json");
    const response = await request.json();
    const data = response.filter((d)=>d.id == context.query.slug);
    if (data.length < 1) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    return {
        props: {
            data: data[0]
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fproduct%2F%5Bslug%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fproduct%2F%5Bslug%5D.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=private-next-pages%2F_document.tsx&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fproduct_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproduct_2F_5Bslug_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_slug_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticPaths");
const next_route_loaderkind_PAGES_page_2Fproduct_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproduct_2F_5Bslug_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(_slug_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(_slug_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/product/[slug]",
        pathname: "/product/[slug]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: _slug_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 5129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ completeCheckoutCOD),
/* harmony export */   j: () => (/* binding */ formatIDR)
/* harmony export */ });
const formatIDR = (param)=>{
    let format = param.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return format;
};
const completeCheckoutCOD = (data)=>{
    // *Nama Lenagkap* Agung Ardiyanto
    // *Email* agungd3v@gmail.com
    // *No. Telepon / HP* 082179099557
    // *Alamat Lengkap* Rahasia illahi
    const name = "*Nama%20Lenagkap*%20Agung%20Ardiyanto";
    const email = "*Email*%20agungd3v@gmail.com";
    const phone = "*No.%20Telepon%20/%20HP*%20082179099557";
    const address = "*Alamat%20Lengkap*%20Rahasia%20illahi";
    const productName = "https://loofytech.com";
    const productPrice = "Rp23.500";
    const productQuantity = "2";
    const subTotal = "Rp47.000";
    const txt = `https://api.whatsapp.com/send?phone=6281398170163&text=${name}%0A${email}%0A${phone}%0A${address}%0A%0A*Informasi%20Pesanan*%0A${productName}%0A*${productPrice}%20(x${productQuantity})*%0A%0ASubtotal%20*${subTotal}*`;
    return window.open(txt);
};


/***/ }),

/***/ 9177:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/SearchOutlined");

/***/ }),

/***/ 4145:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/SnippetsOutlined");

/***/ }),

/***/ 8000:
/***/ ((module) => {

module.exports = require("antd/lib/drawer");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 8890:
/***/ ((module) => {

module.exports = require("nextjs-progressbar");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [769,636,118,163,936], () => (__webpack_exec__(8114)));
module.exports = __webpack_exports__;

})();