"use strict";
exports.id = 936;
exports.ids = [936];
exports.modules = {

/***/ 1936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ AppLayout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"layouts\\AppLayout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"font"}
var target_path_layouts_AppLayout_tsx_import_Inter_arguments_subsets_latin_variableName_font_ = __webpack_require__(5040);
var target_path_layouts_AppLayout_tsx_import_Inter_arguments_subsets_latin_variableName_font_default = /*#__PURE__*/__webpack_require__.n(target_path_layouts_AppLayout_tsx_import_Inter_arguments_subsets_latin_variableName_font_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
;// CONCATENATED MODULE: ./components/Footer.tsx





function Footer() {
    const [language, setLanguage] = (0,external_react_.useState)(0);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "bg-white py-8",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex items-start gap-5 w-3/4 mx-auto flex-col md:flex-row",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "w-full md:flex-1 flex",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "w-full md:w-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "font-bold mb-3",
                                children: "Jelajahi Pasar Pagi"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex text-gray-700 flex-col gap-2 text-sm",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/product",
                                        className: "whitespace-nowrap hover:text-primary",
                                        children: "Produk Siswa"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "teams",
                                        className: "whitespace-nowrap hover:text-primary",
                                        children: "Profil Tim"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/gallery",
                                        className: "whitespace-nowrap hover:text-primary",
                                        children: "Galeri Pasar Pagi"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/about",
                                        className: "whitespace-nowrap hover:text-primary",
                                        children: "Informasi Pasar Pagi"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "font-bold mt-5 mb-3 text-center md:text-left",
                                children: "Temukan Pasar Pagi"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex text-gray-700 gap-1.5 text-sm justify-center md:justify-start",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "#",
                                        className: "w-9 h-9 bg-primary text-white border-2 border-primary hover:border-blue-700 flex items-center justify-center rounded-full",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(bi_.BiLogoInstagramAlt, {
                                            size: 24
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "#",
                                        className: "w-9 h-9 bg-primary text-white border-2 border-primary hover:border-blue-700 flex items-center justify-center rounded-full",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(bi_.BiLogoFacebookCircle, {
                                            size: 24
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "#",
                                        className: "w-9 h-9 bg-primary text-white border-2 border-primary hover:border-blue-700 flex items-center justify-center rounded-full",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(bi_.BiLogoYoutube, {
                                            size: 24
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "#",
                                        className: "w-9 h-9 bg-primary text-white border-2 border-primary hover:border-blue-700 flex items-center justify-center rounded-full",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(bi_.BiLogoGmail, {
                                            size: 24
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "w-full flex flex-col justify-center items-center gap-5 md:w-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: "/pasar_pagi.png",
                            width: 200,
                            height: 100,
                            className: "",
                            alt: ""
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-xs",
                            children: [
                                "Copyright \xa9 ",
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "font-bold",
                                    children: "2023"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex p-1 items-center bg-secondary rounded-lg overflow-hidden",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: `py-1 rounded-l px-3 ease-in-out duration-100 ${language == 0 ? "bg-primary text-white font-bold" : ""}`,
                                    onClick: ()=>setLanguage(0),
                                    children: "Indonesia"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: `py-1 rounded-r px-3 ease-in-out duration-100 ${language == 1 ? "bg-primary text-white font-bold" : ""}`,
                                    onClick: ()=>setLanguage(1),
                                    children: "English"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: external "@ant-design/icons/lib/icons/SnippetsOutlined"
var SnippetsOutlined_ = __webpack_require__(4145);
var SnippetsOutlined_default = /*#__PURE__*/__webpack_require__.n(SnippetsOutlined_);
// EXTERNAL MODULE: external "@ant-design/icons/lib/icons/SearchOutlined"
var SearchOutlined_ = __webpack_require__(9177);
var SearchOutlined_default = /*#__PURE__*/__webpack_require__.n(SearchOutlined_);
// EXTERNAL MODULE: external "antd/lib/drawer"
var drawer_ = __webpack_require__(8000);
var drawer_default = /*#__PURE__*/__webpack_require__.n(drawer_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Header.tsx









function Header() {
    const [menuMobile, setMenuMobile] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const goToPath = (path)=>{
        setMenuMobile(false);
        return router.push(path);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((drawer_default()), {
                title: "Navigasi",
                placement: "left",
                closable: true,
                onClose: ()=>setMenuMobile(false),
                open: menuMobile,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex gap-3 flex-col",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            onClick: ()=>goToPath("/product"),
                            className: "font-bold text-primary text-lg uppercase",
                            children: "Produk Siswa"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            onClick: ()=>goToPath("/gallery"),
                            className: "font-bold text-primary text-lg uppercase",
                            children: "Galeri Pasar Pagi"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            onClick: ()=>goToPath("/teams"),
                            className: "font-bold text-primary text-lg uppercase",
                            children: "Profil Tim"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            onClick: ()=>goToPath("/about"),
                            className: "font-bold text-primary text-lg uppercase",
                            children: "Informasi Pasar Pagi"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "bg-white sticky top-0 z-50",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center justify-between text-xs bg-secondary py-2 px-5 md:px-10",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex gap-1 items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx((SnippetsOutlined_default()), {
                                            style: {
                                                fontSize: 18
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: "Download Pasar Pagi App"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "hidden md:flex items-center gap-9",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/product",
                                        children: "Produk Siswa"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/gallery",
                                        children: "Galeri Pasar Pagi"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/teams",
                                        children: "Profil Tim"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/about",
                                        children: "Informasi Pasar Pagi"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "px-5 md:px-10 py-3 gap-10 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: "/logo.jpg",
                                    width: 170,
                                    height: 60,
                                    alt: "logo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "hidden md:flex flex-1",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "w-full flex items-center border border-gray-300 px-3 gap-2 rounded-md",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx((SearchOutlined_default()), {
                                            style: {
                                                fontSize: 20
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "text",
                                            placeholder: "Cari di Pasar Pagi",
                                            className: "text-sm w-full py-2 outline-none",
                                            autoComplete: "off"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                type: "button",
                                className: "outline-none select-none block md:hidden",
                                onClick: ()=>setMenuMobile(true),
                                children: /*#__PURE__*/ jsx_runtime.jsx(bi_.BiMenu, {
                                    size: 32,
                                    className: "text-gray-700"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "px-5 pb-3 w-full flex md:hidden",
                        children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                            type: "text",
                            placeholder: "Cari produk",
                            className: "h-10 px-3 outline-none text-sm w-full border rounded-lg"
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./layouts/AppLayout.tsx




function AppLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (target_path_layouts_AppLayout_tsx_import_Inter_arguments_subsets_latin_variableName_font_default()).className,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
        ]
    });
}


/***/ })

};
;