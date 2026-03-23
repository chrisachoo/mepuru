import { LoginBlockPreview } from "~/components/blocks/login-block-preview"
import { ComponentShowcase } from "~/components/docs/component-showcase"
import { PageLayout } from "~/components/layout/page-layout"
import { loginBlockCode } from "~/data/blocks/login"

export default function LoginBlockPage() {
	return (
		<PageLayout
			title="Login"
			description="Email and password with one fieldset per control—legend, input, and description in a vertical grid (same idea as the Fieldset docs). No dialog."
		>
			<p class="text-base leading-relaxed text-base-content/75">
				Each
				{" "}
				<code class="rounded bg-base-300/60 px-1.5 py-0.5 text-sm">Fieldset</code>
				{" "}
				is a
				{" "}
				<code class="rounded bg-base-300/60 px-1.5 py-0.5 text-sm">grid gap-2</code>
				{" "}
				stack so labels never sit beside inputs on a row. See
				{" "}
				<a
					class="link link-primary font-medium"
					href="/components/fieldset/"
				>
					Fieldset
				</a>
				{" "}
				for the primitive reference.
			</p>

			<ComponentShowcase
				code={loginBlockCode}
				id="login-block"
				name="block-login"
				title="Login block"
				preview={<LoginBlockPreview />}
			>
				Card wraps the form; actions stay outside the fieldsets in their own grid.
			</ComponentShowcase>
		</PageLayout>
	)
}
