export const loginBlockCode = `import { A } from "@solidjs/router"
import { Button } from "~/components/ui/button"
import {
	Card,
	CardBody,
	CardDescription,
	CardTitle
} from "~/components/ui/card"
import {
	FieldDescription,
	FieldLabel,
	FieldLegend,
	Fieldset
} from "~/components/ui/fieldset"
import { Input } from "~/components/ui/input"
import { Checkbox } from "../ui/checkbox"
import { Divider } from "../ui/divider"

export function LoginBlockPreview() {
	return (
		<div class="mx-auto w-full max-w-md">
			<Card class="border-base-300/80 shadow-lg">
				<CardBody class="gap-6">
					<div class="grid gap-1 text-center">
						<CardTitle class="justify-center text-xl">Welcome back</CardTitle>
						<CardDescription>
							Sign in with your work email to continue.
						</CardDescription>
					</div>

					<form class="grid w-full gap-4">
						<Fieldset class="grid gap-2">
							<FieldLegend>Email</FieldLegend>
							<Input
								id="preview-login-email"
								autocomplete="email"
								placeholder="you@company.com"
								type="email"
								class="w-full"
							/>
							<FieldDescription>
								Use the address you sign into Slack or email with.
							</FieldDescription>
						</Fieldset>

						<Fieldset class="grid gap-2">
							<FieldLegend>Password</FieldLegend>
							<Input
								id="preview-login-password"
								autocomplete="current-password"
								placeholder="••••••••"
								type="password"
								class="w-full"
							/>
							<FieldDescription>
								At least 8 characters. Symbols encouraged.
							</FieldDescription>
						</Fieldset>

						<div class="flex align-center justify-between gap-2">
							<FieldLabel>
								<Checkbox
									id="preview-login-remember-me"
									checked
								/>
								Remember me
							</FieldLabel>

							<A class="link" href="#">Forgot password</A>
						</div>

						<div class="grid">
							<Button
								class="w-full"
								type="button"
								variant="primary"
							>
								Sign in
							</Button>

							<Divider>or</Divider>

							<Button
								class="w-full"
								type="button"
								variant="outline"
							>
								<svg class="size-4" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
									<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
									<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
									<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
									<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
									<path d="M1 1h22v22H1z" fill="none" />
								</svg>
								Continue with Google
							</Button>
						</div>
					</form>

				</CardBody>
			</Card>
		</div>
	)
}
`.trim()
