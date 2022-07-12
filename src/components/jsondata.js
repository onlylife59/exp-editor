let data = {
    data: {
        shortcut: [{
            //快捷操作
            title: "", //标题,如未设置则只显示图标；标题和图标都已设置,则显示图标+标题
            icon: "vwicon-jia", //图标路径,如未设置则只显示标题
            desc: "432423", //描述信息,鼠标悬停浮动展示描述信息
            insertText: function(params) {
                console.log(123, params);
                // console.log('fsdfds', this.$root.getModel())
                /**
                 * params结构信息
                 *{
                 *  selected:"",//已选中字符串
                 *	text:"",//整个表达式字符串
                 *  config:{},//当前定义信息
                 *}
                 */
                return {
                    type: "insert", //inert：在光标处插入值，replace：替换选中值，tips：弹出提示信息
                    text: "+"
                };
            }
        }, {
            //快捷操作
            title: "", //标题,如未设置则只显示图标；标题和图标都已设置,则显示图标+标题
            icon: "vwicon-jian", //图标路径,如未设置则只显示标题
            desc: "", //描述信息,鼠标悬停浮动展示描述信息
            insertText: function(params) {
                /**
                 * params结构信息
                 *{
                 *  selected:"",//已选中字符串
                 *	text:"",//整个表达式字符串
                 *  config:{},//当前定义信息
                 *}
                 */
                return {
                    type: "insert", //inert：在光标处插入值，replace：替换选中值，tips：弹出提示信息
                    text: "-"
                };
            }
        }, {
            //快捷操作
            title: "", //标题,如未设置则只显示图标；标题和图标都已设置,则显示图标+标题
            icon: "vwicon-cheng", //图标路径,如未设置则只显示标题
            desc: "", //描述信息,鼠标悬停浮动展示描述信息
            insertText: function(params) {
                console.log(params);
                /**
                 * params结构信息
                 *{
                 *  selected:"",//已选中字符串
                 *	text:"",//整个表达式字符串
                 *  config:{},//当前定义信息
                 *}
                 */
                return {
                    type: "insert", //inert：在光标处插入值，replace：替换选中值，tips：弹出提示信息
                    text: "*"
                };
            }
        }, {
            //快捷操作
            title: "", //标题,如未设置则只显示图标；标题和图标都已设置,则显示图标+标题
            icon: "vwicon-chu", //图标路径,如未设置则只显示标题
            desc: "", //描述信息,鼠标悬停浮动展示描述信息
            insertText: function(params) {
                console.log(params);
                /**
                 * params结构信息
                 *{
                 *  selected:"",//已选中字符串
                 *	text:"",//整个表达式字符串
                 *  config:{},//当前定义信息
                 *}
                 */
                return {
                    type: "insert", //inert：在光标处插入值，replace：替换选中值，tips：弹出提示信息
                    text: "/"
                };
            }
        }, 'divider', {
            //快捷操作
            title: "", //标题,如未设置则只显示图标；标题和图标都已设置,则显示图标+标题
            icon: "vwicon-zant", //图标路径,如未设置则只显示标题
            desc: "", //描述信息,鼠标悬停浮动展示描述信息
            insertText: function(params) {
                console.log(params);
                /**
                 * params结构信息
                 *{
                 *  selected:"",//已选中字符串
                 *	text:"",//整个表达式字符串
                 *  config:{},//当前定义信息
                 *}
                 */
                return {
                    type: "insert", //inert：在光标处插入值，replace：替换选中值，tips：弹出提示信息
                    text: "||"
                };
            }
        }, {
            //快捷操作
            title: "", //标题,如未设置则只显示图标；标题和图标都已设置,则显示图标+标题
            icon: "vwicon-icon-test", //图标路径,如未设置则只显示标题
            desc: "", //描述信息,鼠标悬停浮动展示描述信息
            insertText: function(params) {
                console.log(params);
                /**
                 * params结构信息
                 *{
                 *  selected:"",//已选中字符串
                 *	text:"",//整个表达式字符串
                 *  config:{},//当前定义信息
                 *}
                 */
                return {
                    type: "insert", //inert：在光标处插入值，replace：替换选中值，tips：弹出提示信息
                    text: "&&"
                };
            }
        }, {
            //快捷操作
            title: "", //标题,如未设置则只显示图标；标题和图标都已设置,则显示图标+标题
            icon: "vwicon-ganth", //图标路径,如未设置则只显示标题
            desc: "", //描述信息,鼠标悬停浮动展示描述信息
            insertText: function(params) {
                console.log(params);
                /**
                 * params结构信息
                 *{
                 *  selected:"",//已选中字符串
                 *	text:"",//整个表达式字符串
                 *  config:{},//当前定义信息
                 *}
                 */
                return {
                    type: "insert", //inert：在光标处插入值，replace：替换选中值，tips：弹出提示信息
                    text: "!"
                };
            }
        }, {
            //快捷操作
            title: "", //标题,如未设置则只显示图标；标题和图标都已设置,则显示图标+标题
            icon: "vwicon-dayu", //图标路径,如未设置则只显示标题
            desc: "", //描述信息,鼠标悬停浮动展示描述信息
            insertText: function(params) {
                console.log(params);
                /**
                 * params结构信息
                 *{
                 *  selected:"",//已选中字符串
                 *	text:"",//整个表达式字符串
                 *  config:{},//当前定义信息
                 *}
                 */
                return {
                    type: "insert", //inert：在光标处插入值，replace：替换选中值，tips：弹出提示信息
                    text: ">"
                };
            }
        }, 'divider', {
            //快捷操作
            title: "", //标题,如未设置则只显示图标；标题和图标都已设置,则显示图标+标题
            icon: "vwicon-xiaoyu", //图标路径,如未设置则只显示标题
            desc: "", //描述信息,鼠标悬停浮动展示描述信息
            insertText: function(params) {
                console.log(params);
                /**
                 * params结构信息
                 *{
                 *  selected:"",//已选中字符串
                 *	text:"",//整个表达式字符串
                 *  config:{},//当前定义信息
                 *}
                 */
                return {
                    type: "insert", //inert：在光标处插入值，replace：替换选中值，tips：弹出提示信息
                    text: "<"
                };
            }
        }, {
            //快捷操作
            title: "", //标题,如未设置则只显示图标；标题和图标都已设置,则显示图标+标题
            icon: "vwicon-dayudy", //图标路径,如未设置则只显示标题
            desc: "", //描述信息,鼠标悬停浮动展示描述信息
            insertText: function(params) {
                console.log(params);
                /**
                 * params结构信息
                 *{
                 *  selected:"",//已选中字符串
                 *	text:"",//整个表达式字符串
                 *  config:{},//当前定义信息
                 *}
                 */
                return {
                    type: "insert/replace/tips", //inert：在光标处插入值，replace：替换选中值，tips：弹出提示信息
                    text: "aaaa"
                };
            }
        }, {
            //快捷操作
            title: "", //标题,如未设置则只显示图标；标题和图标都已设置,则显示图标+标题
            icon: "vwicon-xiaoyudy", //图标路径,如未设置则只显示标题
            desc: "", //描述信息,鼠标悬停浮动展示描述信息
            insertText: function(params) {
                console.log(params);
                /**
                 * params结构信息
                 *{
                 *  selected:"",//已选中字符串
                 *	text:"",//整个表达式字符串
                 *  config:{},//当前定义信息
                 *}
                 */
                return {
                    type: "insert/replace/tips", //inert：在光标处插入值，replace：替换选中值，tips：弹出提示信息
                    text: "aaaa"
                };
            }
        }, {
            //快捷操作
            title: "", //标题,如未设置则只显示图标；标题和图标都已设置,则显示图标+标题
            icon: "vwicon-dengydy", //图标路径,如未设置则只显示标题
            desc: "", //描述信息,鼠标悬停浮动展示描述信息
            insertText: function(params) {
                console.log(params);
                /**
                 * params结构信息
                 *{
                 *  selected:"",//已选中字符串
                 *	text:"",//整个表达式字符串
                 *  config:{},//当前定义信息
                 *}
                 */
                return {
                    type: "insert/replace/tips", //inert：在光标处插入值，replace：替换选中值，tips：弹出提示信息
                    text: "aaaa"
                };
            }
        }, {
            //快捷操作
            title: "", //标题,如未设置则只显示图标；标题和图标都已设置,则显示图标+标题
            icon: "vwicon-budy", //图标路径,如未设置则只显示标题
            desc: "", //描述信息,鼠标悬停浮动展示描述信息
            insertText: function(params) {
                console.log(params);
                /**
                 * params结构信息
                 *{
                 *  selected:"",//已选中字符串
                 *	text:"",//整个表达式字符串
                 *  config:{},//当前定义信息
                 *}
                 */
                return {
                    type: "insert/replace/tips", //inert：在光标处插入值，replace：替换选中值，tips：弹出提示信息
                    text: "aaaa"
                };
            }
        }, 'divider', {
            //快捷操作
            title: "", //标题,如未设置则只显示图标；标题和图标都已设置,则显示图标+标题
            icon: "vwicon-zuokhao", //图标路径,如未设置则只显示标题
            desc: "", //描述信息,鼠标悬停浮动展示描述信息
            insertText: function(params) {
                console.log(params);
                /**
                 * params结构信息
                 *{
                 *  selected:"",//已选中字符串
                 *	text:"",//整个表达式字符串
                 *  config:{},//当前定义信息
                 *}
                 */
                return {
                    type: "insert/replace/tips", //inert：在光标处插入值，replace：替换选中值，tips：弹出提示信息
                    text: "aaaa"
                };
            }
        }, {
            //快捷操作
            title: "", //标题,如未设置则只显示图标；标题和图标都已设置,则显示图标+标题
            icon: "vwicon-youkhao", //图标路径,如未设置则只显示标题
            desc: "", //描述信息,鼠标悬停浮动展示描述信息
            insertText: function(params) {
                console.log(params);
                /**
                 * params结构信息
                 *{
                 *  selected:"",//已选中字符串
                 *	text:"",//整个表达式字符串
                 *  config:{},//当前定义信息
                 *}
                 */
                return {
                    type: "insert/replace/tips", //inert：在光标处插入值，replace：替换选中值，tips：弹出提示信息
                    text: "aaaa"
                };
            }
        }, 'divider', {
            //快捷操作
            title: "", //标题,如未设置则只显示图标；标题和图标都已设置,则显示图标+标题
            icon: "vwicon-eraser", //图标路径,如未设置则只显示标题
            desc: "", //描述信息,鼠标悬停浮动展示描述信息
            insertText: function(params) {
                console.log(params);
                /**
                 * params结构信息
                 *{
                 *  selected:"",//已选中字符串
                 *	text:"",//整个表达式字符串
                 *  config:{},//当前定义信息
                 *}
                 */
                return {
                    type: "insert/replace/tips", //inert：在光标处插入值，replace：替换选中值，tips：弹出提示信息
                    text: "aaaa"
                };
            }
        }, {
            //快捷操作
            title: "True", //标题,如未设置则只显示图标；标题和图标都已设置,则显示图标+标题
            icon: "", //图标路径,如未设置则只显示标题
            desc: "", //描述信息,鼠标悬停浮动展示描述信息
            insertText: function(params) {
                console.log(params);
                /**
                 * params结构信息
                 *{
                 *  selected:"",//已选中字符串
                 *	text:"",//整个表达式字符串
                 *  config:{},//当前定义信息
                 *}
                 */
                return {
                    type: "insert", //inert：在光标处插入值，replace：替换选中值，tips：弹出提示信息
                    text: "aaaa"
                };
            }
        }, {
            //快捷操作
            title: "False", //标题,如未设置则只显示图标；标题和图标都已设置,则显示图标+标题
            icon: "", //图标路径,如未设置则只显示标题
            desc: "", //描述信息,鼠标悬停浮动展示描述信息
            insertText: function(params) {
                console.log(params);
                /**
                 * params结构信息
                 *{
                 *  selected:"",//已选中字符串
                 *	text:"",//整个表达式字符串
                 *  config:{},//当前定义信息
                 *}
                 */
                return {
                    type: "insert/replace/tips", //inert：在光标处插入值，replace：替换选中值，tips：弹出提示信息
                    text: "aaaa"
                };
            }
        }, 'divider', {
            //快捷操作
            title: "转为字符串", //标题,如未设置则只显示图标；标题和图标都已设置,则显示图标+标题
            icon: "", //图标路径,如未设置则只显示标题
            desc: "", //描述信息,鼠标悬停浮动展示描述信息
            insertText: function(params) {
                console.log(params);
                /**
                 * params结构信息
                 *{
                 *  selected:"",//已选中字符串
                 *	text:"",//整个表达式字符串
                 *  config:{},//当前定义信息
                 *}
                 */
                let t = ("\"" + params.selected + "\"");
                return {
                    type: "replace", //inert：在光标处插入值，replace：替换选中值，tips：弹出提示信息
                    text: params.selected ? t : "\"" + "\""
                };
            }
        }, 'divider', {
            //快捷操作
            title: "BASE64编码", //标题,如未设置则只显示图标；标题和图标都已设置,则显示图标+标题
            icon: "", //图标路径,如未设置则只显示标题
            desc: "", //描述信息,鼠标悬停浮动展示描述信息
            insertText: function(params) {
                console.log(params);
                /**
                 * params结构信息
                 *{
                 *  selected:"",//已选中字符串
                 *	text:"",//整个表达式字符串
                 *  config:{},//当前定义信息
                 *}
                 */
                return {
                    type: "insert/replace/tips", //inert：在光标处插入值，replace：替换选中值，tips：弹出提示信息
                    text: "aaaa"
                };
            }
        }, 'divider', {
            //快捷操作
            title: "BASE64解码", //标题,如未设置则只显示图标；标题和图标都已设置,则显示图标+标题
            icon: "", //图标路径,如未设置则只显示标题
            desc: "", //描述信息,鼠标悬停浮动展示描述信息
            insertText: function(params) {
                console.log(params);
                /**
                 * params结构信息
                 *{
                 *  selected:"",//已选中字符串
                 *	text:"",//整个表达式字符串
                 *  config:{},//当前定义信息
                 *}
                 */
                return {
                    type: "insert/replace/tips", //inert：在光标处插入值，replace：替换选中值，tips：弹出提示信息
                    text: "aaaa"
                };
            }
        }, 'divider', {
            //快捷操作
            title: "键值编辑", //标题,如未设置则只显示图标；标题和图标都已设置,则显示图标+标题
            icon: "", //图标路径,如未设置则只显示标题
            desc: "", //描述信息,鼠标悬停浮动展示描述信息
            insertText: function(params) {
                console.log(params);
                /**
                 * params结构信息
                 *{
                 *  selected:"",//已选中字符串
                 *	text:"",//整个表达式字符串
                 *  config:{},//当前定义信息
                 *}
                 */
                return {
                    type: "insert/replace/tips", //inert：在光标处插入值，replace：替换选中值，tips：弹出提示信息
                    text: "aaaa"
                };
            }
        }],
        context: [{
                //表达式上下文
                code: "field",
                title: "字段",
                searcher: {
                    visible: true,
                    placeholder: "搜索字段",
                    type: "redirection", //filter:过滤，redirection：定位
                    scope: ["title", "desc"] //搜索范围
                },
                detail: [{
                        code: "entity",
                        title: "实体",
                        visible: false,
                        icon: "md-document",
                        children: [{
                            code: "user",
                            title: "用户信息姓名",
                            displayType: "title",
                            showTips: true, //是否浮动显示详情
                            tipsTitle: "浮动提WQEEEEEEEEEEEEEEEEEEEEEEEEEE示标题", //浮动提示标题
                            icon: "ios-paper-outline",
                            desc: '三大法师',
                            children: [{
                                    code: "name",
                                    title: "姓名1",
                                    displayType: "titleAndDesc",
                                    showTips: true, //是否浮动显示详情
                                    tipsTitle: "", //浮动提示标题  
                                    desc: "dsadasdas",
                                    icon: "ios-paper-outline",
                                    insertText: function(params) {
                                        console.log("双击");
                                        /**
                                         * params结构信息
                                         *{
                                         *  selected:"",//已选中字符串
                                         *	text:"",//整个表达式字符串
                                         *  config:{},//当前定义信息
                                         *}
                                         */
                                        return {
                                            type: "insert",
                                            text: "三大法师"
                                        };
                                    },
                                    aa: "function() {}"
                                },
                                {
                                    code: "age",
                                    title: "年龄",
                                    displayType: "title",
                                    showTips: true, //是否浮动显示详情
                                    tipsTitle: "", //浮动提示标题
                                    icon: "ios-paper-outline",
                                    insertText: function(params) {
                                        /**
                                         * params结构信息
                                         *{
                                         *  selected:"",//已选中字符串
                                         *	text:"",//整个表达式字符串
                                         *  config:{},//当前定义信息
                                         *}
                                         */
                                        return {
                                            type: "insert/replace/tips",
                                            text: params.config.code
                                        };
                                    }
                                },
                                {
                                    code: "[user].[sex]",
                                    title: "性别撒大大多多多多多大声说所所所所所所所所多多",
                                    displayType: "title",
                                    showTips: true, //是否浮动显示详情
                                    tipsTitle: "", //浮动提示标题
                                    icon: "ios-paper-outline",
                                    insertText: function(params) {
                                        /**
                                         * params结构信息
                                         *{
                                         *  selected:"",//已选中字符串
                                         *	text:"",//整个表达式字符串
                                         *  config:{},//当前定义信息
                                         *}
                                         */
                                        return {
                                            type: "insert/replace/tips",
                                            text: params.config.code
                                        };
                                    }
                                }
                            ]
                        }]
                    },
                    {
                        code: "widget",
                        title: "窗体控件",
                        displayType: "title",
                        showTips: true, //是否浮动显示详情
                        icon: "md-document",
                        children: [{
                                code: "JGButton1",
                                title: "JGButton1(提交)",
                                icon: "ios-paper-outline",
                                children: [{
                                        code: "CC.JGButton1.Enable",
                                        title: "Enable(使能)fd所得到的多多多多多多多多多付先导阀绿豆粉",
                                        displayType: "title",
                                        showTips: true, //是否浮动显示详情
                                        tipsTitle: "", //浮动提示标题
                                        icon: "ios-paper-outline",
                                        insertText: function(params) {
                                            /**
                                             * params结构信息
                                             *{
                                             *  selected:"",//已选中字符串
                                             *	text:"",//整个表达式字符串
                                             *  config:{},//当前定义信息
                                             *}
                                             */
                                            return {
                                                type: "insert/replace/tips",
                                                text: params.config.code
                                            };
                                        }
                                    },
                                    {
                                        code: "CC.JGButton1.Visible",
                                        title: "Visible(显示)",
                                        displayType: "title",
                                        showTips: true, //是否浮动显示详情
                                        tipsTitle: "", //浮动提示标题
                                        icon: "ios-paper-outline",
                                        insertText: function(params) {
                                            /**
                                             * params结构信息
                                             *{
                                             *  selected:"",//已选中字符串
                                             *	text:"",//整个表达式字符串
                                             *  config:{},//当前定义信息
                                             *}
                                             */
                                            return {
                                                type: "insert/replace/tips",
                                                text: params.config.code
                                            };
                                        }
                                    },
                                    {
                                        code: "CC.JGButton1.LabelText",
                                        title: "LabelText(标题)",
                                        displayType: "title",
                                        showTips: true, //是否浮动显示详情
                                        tipsTitle: "", //浮动提示标题
                                        icon: "ios-paper-outline",
                                        insertText: function(params) {
                                            /**
                                             * params结构信息
                                             *{
                                             *  selected:"",//已选中字符串
                                             *	text:"",//整个表达式字符串
                                             *  config:{},//当前定义信息
                                             *}
                                             */
                                            return {
                                                type: "insert/replace/tips",
                                                text: params.config.code
                                            };
                                        }
                                    }
                                ]
                            },
                            {
                                code: "JGDataGrid1",
                                title: "JGDataGrid1(列表)",
                                displayType: "title/titleAndDesc",
                                showTips: true, //是否浮动显示详情
                                tipsTitle: "", //浮动提示标题
                                icon: "ios-paper-outline",
                                children: [{
                                        code: "CC.JGDataGrid1.Enable",
                                        title: "Enable(使能)",
                                        displayType: "title/titleAndDesc",
                                        showTips: true, //是否浮动显示详情
                                        icon: "ios-paper-outline",
                                        insertText: function(params) {
                                            /**
                                             * params结构信息
                                             *{
                                             *  selected:"",//已选中字符串
                                             *	text:"",//整个表达式字符串
                                             *  config:{},//当前定义信息
                                             *}
                                             */
                                            return {
                                                type: "insert/replace/tips",
                                                text: params.config.code
                                            };
                                        }
                                    },
                                    {
                                        code: "CC.JGDataGrid1.Visible",
                                        title: "Visible(显示)",
                                        displayType: "title/titleAndDesc",
                                        showTips: true, //是否浮动显示详情
                                        tipsTitle: "", //浮动提示标题
                                        icon: "ios-paper-outline",
                                        insertText: function(params) {
                                            /**
                                             * params结构信息
                                             *{
                                             *  selected:"",//已选中字符串
                                             *	text:"",//整个表达式字符串
                                             *  config:{},//当前定义信息
                                             *}
                                             */
                                            return {
                                                type: "insert/replace/tips",
                                                text: params.config.code
                                            };
                                        }
                                    },
                                    {
                                        code: "CC.JGDataGrid1.LabelText",
                                        title: "LabelText(标题)",
                                        displayType: "title/titleAndDesc",
                                        showTips: true, //是否浮动显示详情
                                        tipsTitle: "", //浮动提示标题
                                        icon: "ios-paper-outline",
                                        insertText: function(params) {
                                            /**
                                             * params结构信息
                                             *{
                                             *  selected:"",//已选中字符串
                                             *	text:"",//整个表达式字符串
                                             *  config:{},//当前定义信息
                                             *}
                                             */
                                            return {
                                                type: "insert/replace/tips",
                                                text: params.config.code
                                            };
                                        }
                                    },
                                    {
                                        code: "CC.JGDataGrid1.LabelText",
                                        title: "LabelText(标题)",
                                        displayType: "title/titleAndDesc",
                                        showTips: true, //是否浮动显示详情
                                        tipsTitle: "", //浮动提示标题
                                        icon: "ios-paper-outline",
                                        insertText: function(params) {
                                            /**
                                             * params结构信息
                                             *{
                                             *  selected:"",//已选中字符串
                                             *	text:"",//整个表达式字符串
                                             *  config:{},//当前定义信息
                                             *}
                                             */
                                            return {
                                                type: "insert/replace/tips",
                                                text: params.config.code
                                            };
                                        }
                                    },
                                    {
                                        code: "JGDataGrid1.JGTextBoxColumn1",
                                        title: "姓名",
                                        icon: "ios-paper-outline",
                                        children: [{
                                                code: "CC.JGTextBoxColumn1.Enable",
                                                title: "Enable(使能)",
                                                displayType: "title/titleAndDesc",
                                                showTips: true, //是否浮动显示详情
                                                tipsTitle: "", //浮动提示标题
                                                icon: "ios-paper-outline",
                                                insertText: function(
                                                    params
                                                ) {
                                                    /**
                                                     * params结构信息
                                                     *{
                                                     *  selected:"",//已选中字符串
                                                     *	text:"",//整个表达式字符串
                                                     *  config:{},//当前定义信息
                                                     *}
                                                     */
                                                    return {
                                                        type: "insert/replace/tips",
                                                        text: params
                                                            .config
                                                            .code
                                                    };
                                                }
                                            },
                                            {
                                                code: "CC.JGTextBoxColumn1.Visible",
                                                title: "Visible(显示)",
                                                displayType: "title/titleAndDesc",
                                                showTips: true, //是否浮动显示详情
                                                tipsTitle: "", //浮动提示标题
                                                icon: "ios-paper-outline",
                                                insertText: function(
                                                    params
                                                ) {
                                                    /**
                                                     * params结构信息
                                                     *{
                                                     *  selected:"",//已选中字符串
                                                     *	text:"",//整个表达式字符串
                                                     *  config:{},//当前定义信息
                                                     *}
                                                     */
                                                    return {
                                                        type: "insert/replace/tips",
                                                        text: params
                                                            .config
                                                            .code
                                                    };
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        code: "JGDataGrid1.JGTextBoxColumn2",
                                        title: "描述",
                                        displayType: "title/titleAndDesc",
                                        showTips: true, //是否浮动显示详情
                                        icon: "ios-paper-outline",
                                        children: [{
                                                code: "CC.JGTextBoxColumn2.Enable",
                                                title: "Enable(使能)",
                                                displayType: "title/titleAndDesc",
                                                showTips: true, //是否浮动显示详情
                                                tipsTitle: "", //浮动提示标题
                                                icon: "ios-paper-outline",
                                                insertText: function(
                                                    params
                                                ) {
                                                    /**
                                                     * params结构信息
                                                     *{
                                                     *  selected:"",//已选中字符串
                                                     *	text:"",//整个表达式字符串
                                                     *  config:{},//当前定义信息
                                                     *}
                                                     */
                                                    return {
                                                        type: "insert/replace/tips",
                                                        text: params
                                                            .config
                                                            .code
                                                    };
                                                }
                                            },
                                            {
                                                code: "CC.JGTextBoxColumn2.Visible",
                                                title: "Visible(显示)",
                                                displayType: "title/titleAndDesc",
                                                showTips: true, //是否浮动显示详情
                                                tipsTitle: "", //浮动提示标题
                                                icon: "ios-paper-outline",
                                                insertText: function(
                                                    params
                                                ) {
                                                    /**
                                                     * params结构信息
                                                     *{
                                                     *  selected:"",//已选中字符串
                                                     *	text:"",//整个表达式字符串
                                                     *  config:{},//当前定义信息
                                                     *}
                                                     */
                                                    return {
                                                        type: "insert/replace/tips",
                                                        text: params
                                                            .config
                                                            .code
                                                    };
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        code: "inputs",
                        title: "窗体输入",
                        icon: "md-document",
                    }
                ]
            },
            {
                code: "func",
                title: "函数",
                searcher: {
                    visible: true,
                    placeholder: "搜索函数",
                    type: "redirection", //filter:过滤，redirection：定位
                    scope: ["title", "desc"] //搜索范围
                },
                detail: [{
                    code: "commonFunc",
                    title: "常用函数",
                    children: [{
                        code: "ChangeMonyToChinese",
                        title: "dsfsf",
                        displayType: "titleAndDesc",
                        desc: "将人民币金额转换成大写",
                        showTips: true, //是否浮动显示详情
                        tipsTitle: "浮动提示标题", //浮动提示标题
                        icon: "",
                        example: 'ChangeMonyToChinese("120")，返回值为"壹佰贰拾"',
                        insertText: function(params) {
                            /**
                             * params结构信息
                             *{
                             *  selected:"",//已选中字符串
                             *	text:"",//整个表达式字符串
                             *  config:{},//当前定义信息
                             *}
                             */
                            return {
                                type: "insert/replace/tips",
                                text: params.config.code + "()"
                            };
                        }
                    }, {
                        code: "ChangeMonyToChinese1",
                        title: "第三个大概",
                        displayType: "titleAndDesc",
                        desc: "将人民币金额转换成大写",
                        showTips: true, //是否浮动显示详情
                        tipsTitle: "浮动提示标题", //浮动提示标题
                        icon: "",
                        example: 'ChangeMonyToChinese("120")，返回值为"壹佰贰拾"',
                        insertText: function(params) {
                            /**
                             * params结构信息
                             *{
                             *  selected:"",//已选中字符串
                             *	text:"",//整个表达式字符串
                             *  config:{},//当前定义信息
                             *}
                             */
                            return {
                                type: "insert/replace/tips",
                                text: params.config.code + "()"
                            };
                        }
                    }, {
                        code: "ChangeMonyToChinese2",
                        title: "输入try合同",
                        displayType: "titleAndDesc",
                        desc: "啥地方法规",
                        showTips: true, //是否浮动显示详情
                        tipsTitle: "浮动提示标题", //浮动提示标题
                        icon: "",
                        example: 'ChangeMonyToChinese("120")，返回值为"壹佰贰拾"',
                        insertText: function(params) {
                            /**
                             * params结构信息
                             *{
                             *  selected:"",//已选中字符串
                             *	text:"",//整个表达式字符串
                             *  config:{},//当前定义信息
                             *}
                             */
                            return {
                                type: "insert/replace/tips",
                                text: params.config.code + "()"
                            };
                        }
                    }, {
                        code: "ChangeMonyToChinese3",
                        title: "盒好久没见kg",
                        displayType: "titleAndDesc",
                        desc: "发送到多多多多",
                        showTips: true, //是否浮动显示详情
                        tipsTitle: "浮动提示标题", //浮动提示标题
                        icon: "",
                        example: 'ChangeMonyToChinese("120")，返回值为"壹佰贰拾"',
                        insertText: function(params) {
                            /**
                             * params结构信息
                             *{
                             *  selected:"",//已选中字符串
                             *	text:"",//整个表达式字符串
                             *  config:{},//当前定义信息
                             *}
                             */
                            return {
                                type: "insert/replace/tips",
                                text: params.config.code + "()"
                            };
                        }
                    }, {
                        code: "ChangeMonyToChinese4",
                        title: "一月又一月",
                        displayType: "titleAndDesc",
                        desc: "没看见和客户",
                        showTips: true, //是否浮动显示详情
                        tipsTitle: "浮动提示标题", //浮动提示标题
                        icon: "",
                        example: 'ChangeMonyToChinese("120")，返回值为"壹佰贰拾"',
                        insertText: function(params) {
                            /**
                             * params结构信息
                             *{
                             *  selected:"",//已选中字符串
                             *	text:"",//整个表达式字符串
                             *  config:{},//当前定义信息
                             *}
                             */
                            return {
                                type: "insert/replace/tips",
                                text: params.config.code + "()"
                            };
                        }
                    }, {
                        code: "ChangeMonyToChinese5",
                        title: "啊发大水",
                        displayType: "titleAndDesc",
                        desc: "十多个十多个",
                        showTips: true, //是否浮动显示详情
                        tipsTitle: "浮动提示标题", //浮动提示标题
                        icon: "",
                        example: 'ChangeMonyToChinese("120")，返回值为"壹佰贰拾"',
                        insertText: function(params) {
                            /**
                             * params结构信息
                             *{
                             *  selected:"",//已选中字符串
                             *	text:"",//整个表达式字符串
                             *  config:{},//当前定义信息
                             *}
                             */
                            return {
                                type: "insert/replace/tips",
                                text: params.config.code + "()"
                            };
                        }
                    }, {
                        code: "ChangeMonyToChinese6",
                        title: "水电费水电费",
                        displayType: "titleAndDesc",
                        desc: "承包转发",
                        showTips: true, //是否浮动显示详情
                        tipsTitle: "浮动提示标题", //浮动提示标题
                        icon: "",
                        example: 'ChangeMonyToChinese("120")，返回值为"壹佰贰拾"',
                        insertText: function(params) {
                            /**
                             * params结构信息
                             *{
                             *  selected:"",//已选中字符串
                             *	text:"",//整个表达式字符串
                             *  config:{},//当前定义信息
                             *}
                             */
                            return {
                                type: "insert/replace/tips",
                                text: params.config.code + "()"
                            };
                        }
                    }, {
                        code: "ChangeMonyToChinese7",
                        title: "哦UI欧了",
                        displayType: "titleAndDesc",
                        desc: "非结构化",
                        showTips: true, //是否浮动显示详情
                        tipsTitle: "浮动提示标题", //浮动提示标题
                        icon: "",
                        example: 'ChangeMonyToChinese("120")，返回值为"壹佰贰拾"',
                        insertText: function(params) {
                            /**
                             * params结构信息
                             *{
                             *  selected:"",//已选中字符串
                             *	text:"",//整个表达式字符串
                             *  config:{},//当前定义信息
                             *}
                             */
                            return {
                                type: "insert/replace/tips",
                                text: params.config.code + "()"
                            };
                        }
                    }, {
                        code: "ChangeMonyToChinese8",
                        title: "啊实打实大",
                        displayType: "titleAndDesc",
                        desc: "将人民币金额转啊发顺丰换成大写",
                        showTips: true, //是否浮动显示详情
                        tipsTitle: "浮动提示标题", //浮动提示标题
                        icon: "",
                        example: 'ChangeMonyToChinese("120")，返回值为"壹佰贰拾"',
                        insertText: function(params) {
                            /**
                             * params结构信息
                             *{
                             *  selected:"",//已选中字符串
                             *	text:"",//整个表达式字符串
                             *  config:{},//当前定义信息
                             *}
                             */
                            return {
                                type: "insert/replace/tips",
                                text: params.config.code + "()"
                            };
                        }
                    }, {
                        code: "ChangeMonyToChinese9",
                        title: "....",
                        displayType: "titleAndDesc",
                        desc: "dsfFDs",
                        showTips: true, //是否浮动显示详情
                        tipsTitle: "浮动提示标题", //浮动提示标题
                        icon: "",
                        example: 'ChangeMonyToChinese("120")，返回值为"壹佰贰拾"',
                        insertText: function(params) {
                            /**
                             * params结构信息
                             *{
                             *  selected:"",//已选中字符串
                             *	text:"",//整个表达式字符串
                             *  config:{},//当前定义信息
                             *}
                             */
                            return {
                                type: "insert/replace/tips",
                                text: params.config.code + "()"
                            };
                        }
                    }, ]
                }, {
                    code: "commonFunc",
                    title: "罕见函数",
                    children: [{
                        code: "ChangeMonyToChinese",
                        title: "dsfsf",
                        displayType: "titleAndDesc",
                        desc: "将人民币金额转换成大写",
                        showTips: true, //是否浮动显示详情
                        tipsTitle: "浮动提示标题", //浮动提示标题
                        icon: "",
                        example: 'ChangeMonyToChinese("120")，返回值为"壹佰贰拾"',
                        insertText: function(params) {
                            /**
                             * params结构信息
                             *{
                             *  selected:"",//已选中字符串
                             *	text:"",//整个表达式字符串
                             *  config:{},//当前定义信息
                             *}
                             */
                            return {
                                type: "insert/replace/tips",
                                text: params.config.code + "()"
                            };
                        }
                    }, {
                        code: "ChangeMonyToChinese1",
                        title: "第三个大概",
                        displayType: "titleAndDesc",
                        desc: "将人民币金额转换成大写",
                        showTips: true, //是否浮动显示详情
                        tipsTitle: "浮动提示标题", //浮动提示标题
                        icon: "",
                        example: 'ChangeMonyToChinese("120")，返回值为"壹佰贰拾"',
                        insertText: function(params) {
                            /**
                             * params结构信息
                             *{
                             *  selected:"",//已选中字符串
                             *	text:"",//整个表达式字符串
                             *  config:{},//当前定义信息
                             *}
                             */
                            return {
                                type: "insert/replace/tips",
                                text: params.config.code + "()"
                            };
                        }
                    }, {
                        code: "ChangeMonyToChinese2",
                        title: "输入try合同",
                        displayType: "titleAndDesc",
                        desc: "啥地方法规",
                        showTips: true, //是否浮动显示详情
                        tipsTitle: "浮动提示标题", //浮动提示标题
                        icon: "",
                        example: 'ChangeMonyToChinese("120")，返回值为"壹佰贰拾"',
                        insertText: function(params) {
                            /**
                             * params结构信息
                             *{
                             *  selected:"",//已选中字符串
                             *	text:"",//整个表达式字符串
                             *  config:{},//当前定义信息
                             *}
                             */
                            return {
                                type: "insert/replace/tips",
                                text: params.config.code + "()"
                            };
                        }
                    }, {
                        code: "ChangeMonyToChinese3",
                        title: "盒好久没见kg",
                        displayType: "titleAndDesc",
                        desc: "发送到多多多多",
                        showTips: true, //是否浮动显示详情
                        tipsTitle: "浮动提示标题", //浮动提示标题
                        icon: "",
                        example: 'ChangeMonyToChinese("120")，返回值为"壹佰贰拾"',
                        insertText: function(params) {
                            /**
                             * params结构信息
                             *{
                             *  selected:"",//已选中字符串
                             *	text:"",//整个表达式字符串
                             *  config:{},//当前定义信息
                             *}
                             */
                            return {
                                type: "insert/replace/tips",
                                text: params.config.code + "()"
                            };
                        }
                    }, {
                        code: "ChangeMonyToChinese4",
                        title: "一月又一月",
                        displayType: "titleAndDesc",
                        desc: "没看见和客户",
                        showTips: true, //是否浮动显示详情
                        tipsTitle: "浮动提示标题", //浮动提示标题
                        icon: "",
                        example: 'ChangeMonyToChinese("120")，返回值为"壹佰贰拾"',
                        insertText: function(params) {
                            /**
                             * params结构信息
                             *{
                             *  selected:"",//已选中字符串
                             *	text:"",//整个表达式字符串
                             *  config:{},//当前定义信息
                             *}
                             */
                            return {
                                type: "insert/replace/tips",
                                text: params.config.code + "()"
                            };
                        }
                    }, {
                        code: "ChangeMonyToChinese5",
                        title: "啊发大水",
                        displayType: "titleAndDesc",
                        desc: "十多个十多个",
                        showTips: true, //是否浮动显示详情
                        tipsTitle: "浮动提示标题", //浮动提示标题
                        icon: "",
                        example: 'ChangeMonyToChinese("120")，返回值为"壹佰贰拾"',
                        insertText: function(params) {
                            /**
                             * params结构信息
                             *{
                             *  selected:"",//已选中字符串
                             *	text:"",//整个表达式字符串
                             *  config:{},//当前定义信息
                             *}
                             */
                            return {
                                type: "insert/replace/tips",
                                text: params.config.code + "()"
                            };
                        }
                    }, {
                        code: "ChangeMonyToChinese6",
                        title: "水电费水电费",
                        displayType: "titleAndDesc",
                        desc: "承包转发",
                        showTips: true, //是否浮动显示详情
                        tipsTitle: "浮动提示标题", //浮动提示标题
                        icon: "",
                        example: 'ChangeMonyToChinese("120")，返回值为"壹佰贰拾"',
                        insertText: function(params) {
                            /**
                             * params结构信息
                             *{
                             *  selected:"",//已选中字符串
                             *	text:"",//整个表达式字符串
                             *  config:{},//当前定义信息
                             *}
                             */
                            return {
                                type: "insert/replace/tips",
                                text: params.config.code + "()"
                            };
                        }
                    }, {
                        code: "ChangeMonyToChinese7",
                        title: "哦UI欧了",
                        displayType: "titleAndDesc",
                        desc: "非结构化",
                        showTips: true, //是否浮动显示详情
                        tipsTitle: "浮动提示标题", //浮动提示标题
                        icon: "",
                        example: 'ChangeMonyToChinese("120")，返回值为"壹佰贰拾"',
                        insertText: function(params) {
                            /**
                             * params结构信息
                             *{
                             *  selected:"",//已选中字符串
                             *	text:"",//整个表达式字符串
                             *  config:{},//当前定义信息
                             *}
                             */
                            return {
                                type: "insert/replace/tips",
                                text: params.config.code + "()"
                            };
                        }
                    }, {
                        code: "ChangeMonyToChinese8",
                        title: "啊实打实大",
                        displayType: "titleAndDesc",
                        desc: "将人民币金额转啊发顺丰换成大写",
                        showTips: true, //是否浮动显示详情
                        tipsTitle: "浮动提示标题", //浮动提示标题
                        icon: "",
                        example: 'ChangeMonyToChinese("120")，返回值为"壹佰贰拾"',
                        insertText: function(params) {
                            /**
                             * params结构信息
                             *{
                             *  selected:"",//已选中字符串
                             *	text:"",//整个表达式字符串
                             *  config:{},//当前定义信息
                             *}
                             */
                            return {
                                type: "insert/replace/tips",
                                text: params.config.code + "()"
                            };
                        }
                    }, {
                        code: "ChangeMonyToChinese9",
                        title: "....",
                        displayType: "titleAndDesc",
                        desc: "dsfFDs",
                        showTips: true, //是否浮动显示详情
                        tipsTitle: "浮动提示标题", //浮动提示标题
                        icon: "",
                        example: 'ChangeMonyToChinese("120")，返回值为"壹佰贰拾"',
                        insertText: function(params) {
                            /**
                             * params结构信息
                             *{
                             *  selected:"",//已选中字符串
                             *	text:"",//整个表达式字符串
                             *  config:{},//当前定义信息
                             *}
                             */
                            return {
                                type: "insert/replace/tips",
                                text: params.config.code + "()"
                            };
                        }
                    }, ]
                }]
            }
        ],
        editorSyntaxDefine: {
            //编辑器语法定义
            placeholder: "占位显示值，类比input框中placeholder" //占位显示值，类比input框中placeholder
        },

        beforeCreate: function(editor) {
            // 注册自定义语言
            editor.languages.register({
                id: "v3Platform"
            });
            // 为该自定义语言基本的Token
            editor.languages.setMonarchTokensProvider("v3Platform", {});
        },
        validate: function() {
            //校验表达式
            /**
             *{
             *  selected:"",//已选中字符串
             *	text:"",//整个表达式字符串
             *  config:{},//当前快捷操作定义信息
             *}
             */
            return {
                success: false,
                detial: [{
                    msg: "错误信息"
                }, {
                    msg: "需要对表达式进行语法校验，此时应调用此属性值asddddddd安抚付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付按时大大多多多多多多多多多多多多多"
                }, {
                    msg: "错误信息"
                }, {
                    msg: "错误信息"
                }, {
                    msg: "错误信息"
                }, {
                    msg: "错误信息"
                }, {
                    msg: "错误信息"
                }, {
                    msg: "错误信息"
                }, {
                    msg: "错误信息"
                }, {
                    msg: "错误信息"
                }, {
                    msg: "错误信息"
                }, {
                    msg: "错误信息"
                }, {
                    msg: "错误信息"
                }, {
                    msg: "错误信息"
                }, {
                    msg: "错误信息"
                }, {
                    msg: "错误信息"
                }, {
                    msg: "错误信息"
                }, {
                    msg: "错误信息"
                }, {
                    msg: "错误信息"
                }]
            };
        }
    }
};
export default data;