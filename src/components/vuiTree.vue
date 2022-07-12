<template>
	<div class="vui-tree">
		<Collapse v-model="cur">
			<Panel
				v-for="(item, index) in treeData"
				:key="index"
				:name="item.code"
				:hide-arrow="!(item.children && item.children.length)"
				:class="{
					'select-div': selectCur === item.code,
					'hover-div': !item.children,
					'single-div': item.children && item.children.length
				}"
			>
				<!-- <Icon type="ios-arrow-forward" /> -->
				<!-- <Poptip
					transfer
					trigger="hover"
					:disabled="!item.showTips"
					transfer-class-name="panel-poptip"
				> -->
				<div
					@dblclick="setEdit(item.insertText)"
					class="panel-item"
					@mouseenter="handleOpen($event, item)"
					@mouseleave="handleClose"
				>
					<div>
						<Icon :type="item.icon" v-if="item.icon" />
						<span class="title">{{ item.title }}</span>
						<span v-show="topLevel" class="panel-count">{{
							item.children && item.children.length
								? " (" + item.children.length + ")"
								: ""
						}}</span>
						<p
							v-if="
								item.desc && item.displayType === 'titleAndDesc'
							"
						>
							{{ item.desc }}
						</p>
					</div>
					<div class="hover"></div>
				</div>
				<!-- <div slot="content" class="panel-poptip-content">
						<div class="title">{{ item.tipsTitle }}</div>
						<div class="body">
							<div class="desc">{{ item.desc }}</div>
							<div class="example">
								<h6>示例</h6>
								<p>{{ item.example }}</p>
							</div>
						</div>
					</div>
				</Poptip> -->

				<div
					v-if="item.children && item.children.length"
					slot="content"
				>
					<vui-tree
						:treeData="item.children"
						:expandHierarchy="updateList"
					></vui-tree>
				</div>
			</Panel>
		</Collapse>
	</div>
</template>

<script>
	import $ from "jquery";
	export default {
		name: "vuiTree",
		props: {
			expandHierarchy: {
				type: Array,
				default() {
					return () => [];
				}
			},
			treeData: {
				type: Array,
				default() {
					return () => [];
				}
			},
			// 是否是第一级，区分在于左侧和展开侧
			topLevel: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			updateList() {
				let cc = [];
				if (this.expandHierarchy && this.expandHierarchy.length) {
					this.expandHierarchy.forEach((element, index) => {
						if (index !== 0) {
							cc.push(element);
						}
					});
					return cc;
				} else {
					return [];
				}
			},
			cur: {
				get: function() {
					return this.expandHierarchy[0] || null;
				},
				set: function() {
					return this.expandHierarchy[0] || null;
				}
			},
			selectCur() {
				return (
					this.expandHierarchy[this.expandHierarchy.length - 1] || null
				);
			}
		},
		data() {
			return {};
		},
		created() {},
		mounted() {},
		methods: {
			handleOpen(event, item) {
				console.log(123, item);
				let height = $(event.target).height();
				let width = $(".expression-editor-detail").width();
				let top = $(event.target).position().top;
				let hover = $(event.target).find($(".hover"));
				let pos = {
					top: hover.position().top,
					left: hover.position().left
				};
				console.log(hover.position().top, hover.position().left);
				$(".hoverdiv").height(height + 16);
				$(".hoverdiv").css("top", top);
				$(".hoverdiv").css("left", 10);
				$(".hoverdiv").width(width - 6);
				$(".hoverdiv").css("display", "block");
				if (item.showTips) {
					this.$root.$children[0].hoverOpen(item, pos);
				}
			},
			handleClose() {
				$(".hoverdiv").css("display", "none");
				this.$root.$children[0].hoverClose();
			},
			setEdit(func) {
				console.log("事件", this.cur);
				if (typeof func !== "function") {
					return;
				}
				let editor = this.$root.editor;
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
			}
		}
	};
</script>

<style>
	.vui-tree .ivu-collapse {
		border: 0;
		background-color: #fff;
	}
	.vui-tree .ivu-collapse-content {
		padding-right: 0;
	}
	.vui-tree .ivu-collapse > .ivu-collapse-item {
		border-top: 0;
	}

	.vui-tree .ivu-collapse-content > .ivu-collapse-content-box {
		padding-top: 0;
		padding-bottom: 0;
	}

	.vui-tree
		.ivu-collapse
		> .ivu-collapse-item.ivu-collapse-item-active
		> .ivu-collapse-header {
		border-bottom: 0;
	}
	.vui-tree .ivu-collapse > .ivu-collapse-item > .ivu-collapse-header {
		border-bottom: 0 !important;
		height: auto;
		line-height: initial;
		padding: 0;
		display: flex;
		align-items: center;
		position: static;
	}
	.vui-tree
		.ivu-collapse
		> .ivu-collapse-item
		> .ivu-collapse-header
		.panel-item {
		padding: 8px 0;
		width: 100%;
		display: flex;
		z-index: 2;
	}
	.vui-tree
		.ivu-collapse
		> .ivu-collapse-item
		> .ivu-collapse-header
		.panel-item
		> div {
		width: min-content;
	}
	.vui-tree .ivu-collapse > .ivu-collapse-item.hover-div > .ivu-collapse-header {
		padding-left: 16px;
		/* margin-left: 8px; */
	}
	.vui-tree .ivu-collapse .ivu-collapse-header:hover,
	.vui-tree
		.ivu-collapse
		> .ivu-collapse-item.hover-div.select-div
		> .ivu-collapse-header {
		/* background-color: #f5f6f9; */
	}

	.vui-tree .ivu-collapse > .ivu-collapse-item > .ivu-collapse-header > i {
		margin-right: 4px;
		z-index: 2;
	}
	.vui-tree .panel-item > div > i {
		margin-right: 6px;
	}
	.vui-tree .panel-item > div > .title {
		font-size: 14px;
		color: #333c4b;
	}
	.vui-tree .panel-item > div > p {
		font-size: 12px;
		margin-top: 2px;
		color: #a4adba;
	}
	.vui-tree .panel-item > div > i ~ p {
		margin-left: 20px;
	}
	.ivu-poptip-popper .ivu-poptip-arrow {
		display: none !important;
	}
	.panel-poptip .panel-poptip-content .title {
		border-bottom: 1px solid #f1f1f1;
		height: 28px;
		color: #333c4b;
		font-size: 14px;
	}
	.vui-tree .ivu-collapse .single-div ~ .hover-div .ivu-collapse-header,
	.hover-div ~ .single-div .ivu-collapse-header {
		padding-left: 0px;
		margin-left: 0px;
		position: static;
	}
	.panel-poptip .panel-poptip-content .body {
		margin-top: 12px;
	}
	.panel-poptip .panel-poptip-content .body .desc {
		color: #6b737b;
		font-size: 12px;
	}

	.panel-poptip .panel-poptip-content .body .example h6 {
		color: #b0b0b9;
		margin: 20px 0;
	}
	.panel-poptip .panel-poptip-content .body .example p {
		color: #6b737b;
	}
	/* .vui-tree .ivu-poptip {
																									flex-grow: 1;
																									width: 20px;
																								}
																								.vui-tree .ivu-poptip-rel {
																									width: 100%;
																								} */
</style>