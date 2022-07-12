/* eslint-disable no-unused-vars */
/* eslint-disable vue/no-parsing-error */ /* eslint-disable no-unused-vars */
<template>
	<div class="expression-editor">
		<Split v-model="split" :min="splitMin">
			<div
				slot="left"
				class="split-pane-left"
				v-if="settingsData.context && settingsData.context.length"
			>
				<Tabs :value="settingsData.context[0].code">
					<TabPane
						:label="item.title"
						:name="item.code"
						v-for="item in settingsData.context"
						:key="item.code"
						class="context-tab"
					>
						<div class="search-filter" v-if="item.searcher.visible">
							<!-- <AutoComplete
                v-model="searchValue"
                :data="data1"
                icon="ios-search"
                @on-search="handleSearch1"
                :placeholder="item.searcher.placeholder"
              ></AutoComplete> -->
							<i-input
								:placeholder="item.searcher.placeholder"
								clearable
								v-model="searchValue"
								@on-change="handleSearch(item)"
								:class="{
									'is-redirection':
										item.searcher.type === 'redirection'
								}"
							>
								<Icon type="ios-search" slot="prefix" />
							</i-input>
							<div
								class="find-div"
								v-if="item.searcher.type === 'redirection'"
							>
								<Icon
									type="md-arrow-round-up"
									@click="last"
									:class="{
										disabled:
											currentRedirection === 0 ||
											!searchValue
									}"
								/>
								<Icon
									type="md-arrow-round-down"
									@click="next"
									:class="{
										disabled:
											currentRedirection ===
												setecedData.length - 1 ||
											!searchValue
									}"
								/>
							</div>
						</div>
						<!-- <Tree
							v-if="item.detail.length"
							:data="item.detail"
							:render="renderContent"
							
						></Tree> -->
						<div
							class="expression-editor-detail"
							v-if="item.detail.length"
						>
							<div>
								<vui-tree
									:treeData="item.detail"
									:expandHierarchy="expandHierarchy"
									top-level
								></vui-tree>
							</div>
						</div>

						<div v-else class="not-text">
							<Icon type="md-mail-open" />
							<span>暂无数据</span>
						</div>
						<div
							class="find-cur"
							v-if="
								item.searcher.type === 'redirection' &&
									countRedirection
							"
						>
							{{ currentRedirection + 1 }} /
							{{ countRedirection }}
						</div>
						<div class="hoverdiv"></div>
					</TabPane>
				</Tabs>
			</div>
			<div slot="right" class="split-pane-right">
				<div>
					<div
						class="shortcut"
						v-if="
							settingsData.shortcut &&
								settingsData.shortcut.length
						"
					>
						<div
							v-for="(p, index) in settingsData.shortcut"
							class="test"
							:key="index"
						>
							<div v-if="p === 'divider'" class="divider">
								|
							</div>
							<div
								v-else-if="p.icon"
								class="icon"
								:title="p.title || p.desc"
								@click="setEdit(p.insertText)"
							>
								<span
									:class="'icon VWebeditor ' + p.icon"
								></span>
							</div>
							<div
								v-else
								class="text"
								:title="p.desc"
								@click="setEdit(p.insertText)"
							>
								{{ p.title }}
							</div>
						</div>
					</div>
					<div class="body">
						<div
							class="code"
							:ref="refId"
							:placeholder="
								settingsData.editorSyntaxDefine.placeholder
							"
						></div>
						<div class="error-detial" v-show="showErrorDetial">
							<div class="error-detial-title">
								<span>错误：{{ errorCount }}</span>
								<Icon
									type="md-close"
									@click="showErrorDetial = false"
								/>
							</div>
							<div
								v-if="errDetial && errDetial.length"
								class="error-detial-body"
							>
								<div
									v-for="(item, index) in errDetial"
									:key="'ss' + index"
								>
									<Icon type="md-close-circle" />
									<p>
										<span>语法错误：</span>
										<span>{{ item.message }}</span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="tool">
						<Tooltip content="语法检查"
							><Icon
								type="ios-checkmark-circle"
								@click="validate"
							/>
						</Tooltip>
						<Tooltip content="格式化"
							><span @click="formatCode">&nbsp; {} &nbsp;</span>
						</Tooltip>
						<span
							class="error-tip"
							v-show="errorTip"
							@click="
								errorCount &&
									(showErrorDetial = !showErrorDetial)
							"
						>
							<Icon type="md-close-circle" />
							<span>错误：{{ errorCount }}</span>
						</span>
					</div>
					<div class="footer">
						<Button @click="cancel">取消</Button>
						<Button @click="confirm" type="primary">确定</Button>
					</div>
				</div>
			</div>
		</Split>
		<div id="container"></div>
		<div class="panel-poptip-content" v-show="hoverVisible">
			<div class="title">{{ panelInfo.tipsTitle }}</div>
			<div class="body">
				<div class="desc">{{ panelInfo.desc }}</div>
				<div class="example">
					<h6>示例</h6>
					<p>{{ panelInfo.example }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from "jquery";
	import uuidv1 from "uuid/v1";
	import vuiTree from "./vuiTree.vue";
	import VExpressionEditor from "v3-expression-editor";
	import funcs from "v3-expression-editor/debugg/metadata/funcs";
	import componentVars from "v3-expression-editor/debugg/metadata/componentVars/metadata.json";
	import windowVars from "v3-expression-editor/debugg/metadata/windowVars/metadata.json";
	export default {
		name: "expressionEditor",
		props: {
			settings: {
				type: Object,
				default: () => {}
			},
			value: {
				type: String,
				default: ""
			}
		},
		components: { vuiTree },

		data() {
			return {
				refId: null,
				editor: new VExpressionEditor({
					funcs: funcs.getFuncMetadata(),
					componentVars: componentVars,
					windowVars: windowVars
				}),
				searchValue: "",
				split: "290",
				splitMin: 0,
				errorTip: false,
				showErrorDetial: false,
				errorCount: 0,
				errDetial: [],
				fData: [],
				expandHierarchy: [],
				setecedData: [],
				currentRedirection: 0,
				countRedirection: 0,
				panelInfo: {},
				hoverVisible: false,
				timer:null,
				settingsData: this.clone(this.settings) //JSON.parse(JSON.stringify(this.settings))
			};
		},
		watch: {
			value: {
				// eslint-disable-next-line no-unused-vars
				handler: function(newValue, oldValue) {
					if (this.editor.getValue() !== newValue) {
						console.log("发生变化");
						this.editor.insertValue("");
						this.editor.insertValue(newValue);
					}
				}
			}
		},
		beforeCreate() {
			// this.settingsData.beforeCreate();
		},
		created() {
			try {
				this.split =
					this.settingsData.context && this.settingsData.context.length
						? "290"
						: 0;
				this.splitMin = this.split === 0 ? 0 : "290px";

				//复制数据
			} catch (err) {
				//在这里处理错误
			}
			this.refId = uuidv1();
		},
		mounted() {
			let that = this;
			this.$nextTick(() => {
				that.editor.mount(that.$refs[that.refId]);
				var expression = that.$vnode.data.model.expression;
				that.$root.editor = that.editor;
				that.editor.insertValue("");
				that.editor.insertValue(this.value);
				that.editor.onChanged(function(value) {
					if (that.$root[expression] !== value) {
						that.$root[expression] = value;
					}
				});
				// var observer = new ResizeObserver(function(entries) {
				// 	if (Number.parseInt(entries[0].target.style.left) > 290) {
				// 		entries[0].target.style.left = 290 + "px";
				// 	}
				// });
				// var content = document.getElementsByClassName("panel-poptip")[10];
				// observer.observe(content);
			});
		},
		methods: {
			hoverOpen(item, pos) {
				console.log(item);
				this.panelInfo = item;
				$(".panel-poptip-content").css("top", pos.top + 70);
				$(".panel-poptip-content").css(
					"left",
					(pos.left > 290 ? 290 : pos.left) + 30
				);
				let bottom = $(".panel-poptip-content").css("bottom");
				if (Number.parseInt(bottom) < 0) {
					$(".panel-poptip-content").css(
						"top",
						pos.top + 70 + Number.parseInt(bottom) - 20
					);
				}
				let that=this;
				this.timer = setTimeout(() => {
					that.hoverVisible = true;
				}, 300);
			},
			hoverClose(){
					$(".panel-poptip-content").css(
					"left",-1000)
			},
			clone(obj) {
				var o;
				// 如果  他是对象object的话  , 因为null,object,array  也是'object';
				if (typeof obj === "object") {
					// 如果  他是空的话
					if (obj === null) {
						o = null;
					} else {
						// 如果  他是数组arr的话
						if (obj instanceof Array) {
							o = [];
							for (var i = 0, len = obj.length; i < len; i++) {
								o.push(this.clone(obj[i]));
							}
						}
						// 如果  他是对象object的话
						else {
							o = { visible: false };
							for (var j in obj) {
								o[j] = this.clone(obj[j]);
							}
						}
					}
				} else {
					o = obj;
				}
				return o;
			},
			setEdit(func) {
				let editor = this.editor;
				let param = {
					selected: editor.getSelectedValue() || null, //已选中字符串
					text: editor.getValue() || null, //整个表达式字符串
					config: {} //当前定义信息
				};
				let data = func(param);
				if (data.type === "insert") {
					data.text && editor.insertValue(data.text);
				} else if (data.type === "replace") {
					data.text && editor.insertValue(data.text);
				} else {
					editor.getHoverProvider();
				}
			},
			handleSearch(item) {
				let type = item.searcher.type;
				let scope = item.searcher.scope;
				let searchValue = this.searchValue;
				let detailData = [];
				this.fData = [];
				detailData = this.settings.context.filter(
					p => p.code === item.code
				)[0].detail;
				if (!searchValue) {
					item.detail = this.clone(detailData);
					this.expandHierarchy = [];
					this.currentRedirection = 0;
					this.countRedirection = 0;
					return;
				}
				if (type === "filter") {
					if (detailData.length) {
						console.log(329, detailData);
						// detailData.forEach(menu => {
						// 	// if (menu.children && menu.children.length) {
						// 	this.getMenuChildren(scope, menu);
						// 	// const menus = this.getMenuChildren(scope,menu);
						// 	// menus.forEach(item => detail.push(item));
						// 	// }
						// 	// else {
						// 	// 	// detail.push(menu);
						// 	// }
						// });
						// this.getMenuChildren(scope,detailData);
						this.locateParent(item.detail);

						if (this.fData && this.fData.length) {
							//查找显示元素
							this.fData.forEach(p => {
								let bool = false;
								delete p.children;
								scope.forEach(item => {
									if (
										!bool &&
										p[item] &&
										p[item]
											.toLocaleLowerCase()
											.includes(
												searchValue.toLocaleLowerCase()
											)
									) {
										bool = true;
									}
								});
								if (bool) {
									p.show = bool;
								}
							});
							//确定显示元素父元素
							this.fData.forEach(p => {
								if (p.show) {
									this.showParent(p);
								}
							});
							//移除不显示的元素
							let gData = [];
							let map = {};
							this.fData.forEach(p => {
								if (p.show) {
									gData.push(p);
									map[p.code] = p;
								}
							});
							this.fData = gData;
							//转为层级关系
							let yData = [];
							this.fData.forEach(element => {
								let pid = element.pid;
								let id = element.code;
								let parent = map[pid];
								if (parent && pid) {
									let children = parent.children || [];
									children.push(map[id]);
									parent.children = children;
								} else {
									yData.push(map[id]);
								}
							});
							console.log(349, JSON.stringify(this.fData));
							console.log(350, yData);
							item.detail = yData;
						}

						// this.showFilterData(detailData);
						// console.log(337, JSON.stringify(detailData));
						// detail = detail.filter(p => {
						// 	let bool = false;
						// 	scope.forEach(item => {
						// 		if (
						// 			!bool &&
						// 			p[item] &&
						// 			p[item]
						// 				.toLocaleLowerCase()
						// 				.includes(searchValue.toLocaleLowerCase())
						// 		) {
						// 			bool = true;
						// 		}
						// 	});
						// 	if (bool) {
						// 		return p;
						// 	}
						// });
					} else {
						item.detail = [];
					}
				} else {
					if (detailData.length) {
						this.locateParent(item.detail);
						this.currentRedirection = 0;
						this.countRedirection = 0;
						if (this.fData && this.fData.length) {
							//查找显示元素
							let setecedData = [];
							this.fData.forEach(p => {
								scope.forEach(item => {
									if (
										p[item] &&
										p[item]
											.toLocaleLowerCase()
											.includes(
												searchValue.toLocaleLowerCase()
											)
									) {
										setecedData.push(this.expandParent(p.code));
									}
								});
							});
							this.setecedData = setecedData;
							console.log(350, setecedData);
							this.countRedirection = setecedData.length;
							if (setecedData.length) {
								this.expandHierarchy = setecedData[
									this.currentRedirection
								].split("/");
							} else {
								this.expandHierarchy = [];
							}
						}
					} else {
						item.detail = [];
					}
				}
			},
			getMenuChildren(scope, menu) {
				let bool = false;
				scope.forEach(item => {
					if (
						!bool &&
						menu[item] &&
						menu[item]
							.toLocaleLowerCase()
							.includes(this.searchValue.toLocaleLowerCase())
					) {
						bool = true;
					}
				});
				if (bool) {
					menu.show = true;
				}
				if (menu.children && menu.children.length) {
					// return menu.children.reduce((all, item) => {
					// 	const foundChildren = this.getMenuChildren(item);
					// 	return all.concat(foundChildren);
					// }, []);
					menu.children.forEach(item => {
						this.getMenuChildren(scope, item);
					});
				}
			},
			locateParent(data) {
				if (data.length) {
					data.forEach(p => {
						this.fData.push(p);
						if (p.children && p.children.length) {
							p.children.forEach(item => {
								item["pid"] = p.code || null;
							});
							this.locateParent(p.children);
						}
					});
				}
			},
			showParent(data) {
				if (data.pid) {
					this.fData.forEach(p => {
						if (p.code === data.pid) {
							this.showParent(p);
							p.show = true;
						}
					});
				}
			},
			expandParent(code) {
				let data = this.fData.filter(p => p.code === code)[0];
				if (data.pid) {
					return this.expandParent(data.pid) + "/" + data.code;
				} else {
					return code;
				}
			},
			last() {
				if (this.currentRedirection === 0) {
					return;
				}
				this.currentRedirection -= 1;
				// if (this.currentRedirection === -1) {
				// 	this.currentRedirection = this.setecedData.length - 1;
				// }
				this.expandHierarchy = this.setecedData[
					this.currentRedirection
				].split("/");
			},
			next() {
				if (this.currentRedirection === this.setecedData.length - 1) {
					return;
				}
				this.currentRedirection += 1;
				// if (this.currentRedirection === this.setecedData.length) {
				// 	this.currentRedirection = 0;
				// }
				this.expandHierarchy = this.setecedData[
					this.currentRedirection
				].split("/");
			},
			validate() {
				let errData = this.editor.validate();
				if (errData.success) {
					this.errorTip = false;
					this.errorCount = 0;
					this.popPrompt("success", "校验通过!");
				} else {
					this.errorTip = true;
					this.showErrorDetial = true;
					this.errorCount = errData.detail.length;
					// this.errDetial = errData.detail;
					this.errDetial = errData.detail;
					console.log(errData);
				}
			},
			formatCode() {
				this.editor.format();
			},
			popPrompt(type, msg) {
				if (type === "info") {
					this.$Message.info(msg);
				} else if (type === "success") {
					this.$Message.success(msg);
				}
			},
			confirm() {
				console.log(1654, this.value);
				this.$emit("confirm");
			},
			cancel() {
				this.$emit("cancel");
			},
			// eslint-disable-next-line no-unused-vars
			renderContent(h, { root, node, data }) {
				return h(
					"div",
					{
						style: {
							// display: "inline-block",
							// padding: data.children && data.children.length?'0':"16px",
							width: "100%"
						}
					},
					[
						h("span", [
							h("Icon", {
								props: {
									type: data.icon
								},
								style: {
									marginRight: "8px",
									display: data.icon ? "inline-block" : "none"
								}
							}),
							h(
								"span",
								{
									style: {
										color: "333c4b",
										fontZise: "14px"
									}
								},
								data.title +
									(data.children && data.children.length
										? "(" + data.children.length + ")"
										: "")
							)
						]),
						h(
							"p",
							{
								style: {
									display: data.displayType === "titleAndDesc",
									marginTop: "4px",
									color: "#a4adba"
								}
							},
							data.desc
						)
					]
				);
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
	// 隐藏滚动条样式
	.i-scrollbar-hide {
		&::-webkit-scrollbar {
			width: 0;
		}

		&::-webkit-scrollbar-track {
			background-color: transparent;
		}

		&::-webkit-scrollbar-thumb {
			background: #e8eaec;
		}
	}

	// 极简滚动条样式
	.i-scrollbar {
		&::-webkit-scrollbar {
			// width: 6px;
			width: 6px;
			height: 6px;
			background: #fff;
		}

		&::-webkit-scrollbar-track {
			background-color: transparent;
		}

		&::-webkit-scrollbar-thumb {
			// background: #808695;
			// border-radius: 4px;
			-moz-border-radius: 3px;
			-webkit-border-radius: 3px;
			border-radius: 3px;
			background: #d5d7da;
		}

		&::-webkit-scrollbar-thumb:hover {
			background: #b3b6bb;
		}
	}

	::-webkit-scrollbar {
		width: 6px;
		height: 6px;
		background: #fff;
	}

	::-webkit-scrollbar-thumb {
		-moz-border-radius: 3px;
		-webkit-border-radius: 3px;
		border-radius: 3px;
		background: #d5d7da;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #b3b6bb;
	}
	.expression-editor {
		height: 100%;
		border-top: 1px solid #dcdee2;
	}
	.split-pane-left,
	.split-pane-right {
		height: 100%;
	}
	.split-pane-left {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		.context-tab {
			padding-left: 10px;
			display: flex;
			flex-direction: column;
			height: 100%;
		}
		.ivu-tabs {
			height: 100%;
			display: flex;
			flex-direction: column;
		}
		.expression-editor-detail {
			flex-grow: 1;
			height: 20px;
			overflow: auto;
			white-space: nowrap;
			> div {
				width: max-content;
				min-width: 100%;
			}
		}
		.ivu-tabs-content {
			flex-grow: 1;
			height: 20px;
			.search-filter {
				margin: 0 16px 0 6px;
				.ivu-input-wrapper {
					color: red;
				}
			}
			.not-text {
				flex-grow: 1;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				display: flex;
				color: #d1d1d1;
				i {
					font-size: 70px;
				}
			}
			.find-cur {
				position: absolute;
				bottom: 20px;
				right: 20px;
				box-shadow: 0px 0px 10px 5px #eee;
				padding: 4px 10px;
				border-radius: 4px;
				font-size: 15px;
			}
			.hoverdiv {
				display: none;
				background: #f5f6f9;
				pointer-events: none;
				position: absolute;
				z-index: 1;
			}
		}
	}
	.split-pane-right {
		padding-left: 6px;
		> div {
			height: 100%;
			display: flex;
			flex-direction: column;
			.shortcut {
				width: 100%;
				padding: 4px 11px;
				background-color: #f9fafc;
				display: flex;
				flex-wrap: wrap;
				border-bottom: #d2d0d0 1px solid;
				-webkit-touch-callout: none;
				-webkit-user-select: none;
				-khtml-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;
				> .test {
					margin: 4px 5px;
					.divider {
						// margin: 0 5px;
						line-height: 26px;
						font-size: 22px;
						color: #f9fafb;
					}
					div.icon {
						background-size: cover;
						height: 26px;
						width: 26px;
						cursor: pointer;
						border-radius: 2px;
						font-size: 19px;
						padding: 0 4px;
						&:hover {
							background-color: #e6e7e8;
						}
					}
					.text {
						line-height: 26px;
						font-weight: 700;
						border-radius: 2px;
						padding: 0 4px;
						cursor: pointer;
						&:hover {
							background-color: #e6e7e8;
						}
					}
				}
			}
			.body {
				flex-grow: 1;
				height: 20px;
				position: relative;
				.code {
					height: 100%;
					&:empty::before {
						font-size: 14px;
						color: #a4adba;
						content: attr(placeholder);
					}
				}
				.error-detial {
					position: absolute;
					width: 100%;
					max-height: 150px;
					padding: 15px;
					overflow: auto;
					bottom: 0;
					border: 1px solid #eee;
					box-shadow: 0px 0px 10px 5px #eee;
					.error-detial-title {
						display: flex;
						justify-content: space-between;
						align-items: center;
						span {
							font: 16px;
						}
						i {
							font-size: 20px;
							cursor: pointer;
						}
					}
					.error-detial-body > div {
						display: flex;
						margin-top: 12px;
						i {
							color: red;
							margin-right: 10px;
							margin-top: 3px;
						}
						span {
							margin-right: 10px;
						}
					}
				}
			}
			.tool {
				height: 32px;
				border-top: #d2d0d0 1px solid;
				border-bottom: #d2d0d0 1px solid;
				background-color: #f7f7f7;
				font-size: 17px;
				line-height: 32px;
				padding-left: 15px;
				.ivu-tooltip {
					i {
						margin-right: 10px;
						padding: 3px;
						cursor: pointer;
						&:hover {
							background-color: #e6e7e8;
						}
					}
					span {
						margin-right: 10px;
						padding: 2.5px 5px;
						font-weight: 700;
						cursor: pointer;
						&:hover {
							background-color: #e6e7e8;
						}
					}
				}
				.error-tip {
					cursor: pointer;
					padding: 2.5px 5px;
					&:hover {
						background-color: #858383;
					}
					i {
						color: red;
						margin-right: 6px;
					}
					span {
						font-size: 12px;
					}
				}
			}
			.footer {
				margin: 10px 0;
				text-align: right;
				> button {
					margin-right: 15px;
					cursor: default;
				}
			}
		}
	}
	.panel-poptip-content {
		background-color: #fff;
		background-clip: padding-box;
		border-radius: 4px;
		box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
		white-space: nowrap;
		padding: 8px 16px;
		min-width: 100px;
		position: absolute;
		z-index: 300;
		border: 1px;
		pointer-events: none;
		.body {
			margin-top: 12px;
		}

		.title {
			height: 25px;
			font-size: 14px;
			color: #333c4b;
			padding-bottom: 4px;
			border-bottom: 1px solid #f1f1f1;
		}
		.body .desc {
			color: #6b737b;
			font-size: 12px;
		}

		.body .example h6 {
			color: #b0b0b9;
			margin: 20px 0;
		}
		.body .example p {
			color: #6b737b;
		}
	}
</style>
<style>
	html,
	body,
	#app {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	* {
		margin: 0;
		padding: 0;
	}
	.ivu-tabs-bar {
		box-shadow: 0px 0px 10px 1px #eee;
	}
	.ivu-tabs-bar .ivu-tabs-nav {
		float: none;
		display: flex;
	}
	.ivu-tabs-bar .ivu-tabs-nav .ivu-tabs-tab {
		flex: 1;
		text-align: center;
		margin: 8px 0;
		padding: 0;
	}
	.ivu-tabs-bar .ivu-tabs-nav .ivu-tabs-ink-bar {
		display: none;
	}

	.ivu-tabs-bar .ivu-tabs-nav .ivu-tabs-tab.ivu-tabs-tab-active:before {
		display: inline-block;
		width: 30px;
		content: "<span>1234</span>";
		position: absolute;
		color: transparent;
		border-bottom: 3px solid #2d8cf0;
		bottom: -6px;
		margin-left: -1px;
	}
	.ivu-tabs-bar .ivu-tabs-nav .ivu-tabs-tab.ivu-tabs-tab-focused {
		border-color: #f9fafb !important;
	}
	.ivu-tabs-bar .ivu-tabs-nav .ivu-tabs-tab:not(:last-child) {
		border-right: 1px solid #f9fafb;
	}
	.ivu-tabs-bar .ivu-tabs-nav .ivu-tabs-tab:not(:first-child) {
		border-left: 1px solid #f9fafb;
	}
	.ivu-tabs-content {
		flex-grow: 1;
		height: 20px;
	}
	.search-filter {
		display: flex;
		align-items: center;
	}
	.search-filter .find-div i {
		font-size: 20px;
		cursor: pointer;
		flex: 1;
		color: #b5b1b0;
		line-height: 30px;
	}
	.search-filter .find-div i.disabled {
		color: #d6d3d2;
		cursor: not-allowed;
	}
	.search-filter i:hover {
		color: #615f5e;
	}
	.search-filter .find-div {
		white-space: nowrap;
		/* position: absolute; */
		right: 11px;
		background-color: #f9fafc;
		height: 32px;
		display: flex;
		align-items: center;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
		border: 1px solid #dcdee2;
		border-left: 0;
		width: 60px;
		padding: 0 3px;
	}

	.search-filter .ivu-input-wrapper.is-redirection input {
		border-top-right-radius: 0px;
		border-bottom-right-radius: 0px;
	}
	.expression-editor .monaco-editor .view-overlays .current-line {
		border: 0;
	}
</style>
