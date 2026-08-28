import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { ArrowUpRight } from 'lucide-vue-next';

//#region app/components/AppCard.vue?vue&type=script&setup=true&lang.ts
var AppCard_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "AppCard",
	__ssrInlineRender: true,
	props: {
		name: {},
		tagline: {},
		url: {},
		cadence: {},
		emoji: {},
		from: {},
		to: {}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<a${ssrRenderAttrs(mergeProps({
				href: __props.url,
				target: "_blank",
				rel: "noopener noreferrer",
				class: "group relative block overflow-hidden rounded-3xl p-5 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl focus-visible:ring-4 focus-visible:ring-white/60 focus-visible:outline-none active:translate-y-0 active:scale-[0.98]",
				style: { backgroundImage: `linear-gradient(135deg, ${__props.from}, ${__props.to})` }
			}, _attrs))}><div class="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-black/5 to-transparent"></div><span aria-hidden="true" class="pointer-events-none absolute -right-4 -bottom-6 text-8xl opacity-20 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">${ssrInterpolate(__props.emoji)}</span><div class="relative flex items-start gap-4"><span aria-hidden="true" class="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/25 text-3xl backdrop-blur-sm">${ssrInterpolate(__props.emoji)}</span><div class="min-w-0 flex-1 pt-0.5"><h2 class="text-xl leading-tight font-extrabold text-white drop-shadow-sm">${ssrInterpolate(__props.name)}</h2><p class="mt-1 text-sm font-medium text-white/85">${ssrInterpolate(__props.tagline)}</p><span class="mt-3 inline-block rounded-full bg-white/25 px-2.5 py-1 text-[11px] font-bold tracking-wide text-white uppercase backdrop-blur-sm">${ssrInterpolate(__props.cadence)}</span></div>`);
			_push(ssrRenderComponent(unref(ArrowUpRight), { class: "size-6 shrink-0 text-white/80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" }, null, _parent));
			_push(`</div></a>`);
		};
	}
});
//#endregion
//#region app/components/AppCard.vue
var _sfc_setup$1 = AppCard_vue_vue_type_script_setup_true_lang_default.setup;
AppCard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppCard.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var AppCard_default = Object.assign(AppCard_vue_vue_type_script_setup_true_lang_default, { __name: "AppCard" });
//#endregion
//#region app/pages/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		/**
		* Ordered by how often Mike actually opens them, not alphabetically.
		* Each gradient starts from that app's real brand colour so the card is
		* recognisable at a glance, then reaches toward a neighbouring hue to keep
		* the page reading as a rainbow.
		*/
		const apps = [
			{
				name: "Mikes Macros",
				tagline: "Calories and macros, logged by hand",
				url: "https://mikesmacros.vercel.app/",
				cadence: "Daily",
				emoji: "🥗",
				from: "#2f6bff",
				to: "#00c2d1"
			},
			{
				name: "Mikes Finances",
				tagline: "What is in the bank and what is still owed",
				url: "https://mikes-finances.vercel.app/",
				cadence: "Weekly",
				emoji: "💰",
				from: "#ff5f8f",
				to: "#ff9a4a"
			},
			{
				name: "Drunk Chicken Hunt",
				tagline: "Find them before the money runs out",
				url: "https://chicken-hunt.com/",
				cadence: "Bar nights",
				emoji: "🐔",
				from: "#d35400",
				to: "#f9ca24"
			},
			{
				name: "Bella Center Bullies",
				tagline: "Steel boules and the odd argument about who is closest",
				url: "https://bouledogs.com/",
				cadence: "Pétanque",
				emoji: "🐶",
				from: "#d3517e",
				to: "#a855f7"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_AppCard = AppCard_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative min-h-dvh overflow-hidden" }, _attrs))}><div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10"><div class="blob size-72 bg-[#2f6bff]" style="${ssrRenderStyle({
				"top": "-4rem",
				"left": "-3rem"
			})}"></div><div class="blob size-72 bg-[#f9ca24]" style="${ssrRenderStyle({
				"top": "20%",
				"right": "-4rem",
				"animation-delay": "-4s"
			})}"></div><div class="blob size-72 bg-[#ff5f8f]" style="${ssrRenderStyle({
				"bottom": "12%",
				"left": "-4rem",
				"animation-delay": "-8s"
			})}"></div><div class="blob size-72 bg-[#a855f7]" style="${ssrRenderStyle({
				"bottom": "-4rem",
				"right": "-2rem",
				"animation-delay": "-12s"
			})}"></div></div><main class="mx-auto w-full max-w-2xl px-5 pt-14 pb-16"><header class="mb-9 text-center"><h1 class="rainbow-text text-5xl font-black tracking-tight sm:text-6xl"> Mike&#39;s Life </h1><p class="mt-3 text-base font-medium" style="${ssrRenderStyle({ "color": "var(--ink-soft)" })}"> Everything I built, one tap away. </p></header><div class="grid gap-4 sm:grid-cols-2"><!--[-->`);
			ssrRenderList(apps, (app) => {
				_push(ssrRenderComponent(_component_AppCard, mergeProps({ key: app.url }, { ref_for: true }, app), null, _parent));
			});
			_push(`<!--]--></div><p class="mt-10 text-center text-xs font-medium" style="${ssrRenderStyle({ "color": "var(--ink-soft)" })}"> Every card opens in a new tab. </p></main></div>`);
		};
	}
});
//#endregion
//#region app/pages/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = index_vue_vue_type_script_setup_true_lang_default;

export { pages_default as default };
//# sourceMappingURL=pages-He-o4DbR.mjs.map
