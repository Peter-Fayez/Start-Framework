import Title from "../../Components/Title/Title";

import { useFormik } from "formik";
import { number, object, string } from "yup";

export default function Contact() {
	const usernameRegex = /^[a-zA-Z\s]{3,20}$/;
	const passwordRegex =
		/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

	let validateInputs = object({
		name: string()
			.required("User Name is required")
			.min(3, "Username Should be more than 3 Characters")
			.max(20, "Username Should be less than 20 Characters")
			.matches(usernameRegex, "Username is Invalid"),
		age: number()
			.required("User Age is required")
			.min(18, "Age should not be less than 18")
			.max(50, "Age should not be more than 50"),
		email: string().required("User Email is required").email(),
		password: string()
			.required("User Password is required")
			.matches(
				passwordRegex,
				"Password is Invalid | Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
			),
	});

	function submitForm() {
		console.log("Form Submitted");
	}

	let formik = useFormik({
		initialValues: {
			name: "",
			age: "",
			email: "",
			password: "",
		},

		validationSchema: validateInputs,

		onSubmit: submitForm,
	});

	// console.log(formik);

	return (
		<>
			<div className="contact-page py-10 mt-24 text-mainColor">
				<Title heading="contact section" bgColor="bg-mainColor" />

				<form
					className="container py-8 flex flex-col flex-wrap justify-center items-center gap-6"
					onSubmit={formik.handleSubmit}
				>
					<div className="w-1/2 relative">
						<input
							type="text"
							name="name"
							id="name"
							className="input-styles"
							placeholder="Username"
							value={formik.values.name}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>

						{formik.values.name ? (
							<label
								htmlFor="name"
								className="text-commonColor absolute left-0 -top-4"
							>
								Username:
							</label>
						) : (
							""
						)}

						{formik.errors.name && formik.touched.name && (
							<p className="text-red-500 text-sm">
								* {formik.errors.name}
							</p>
						)}
					</div>

					<div className="w-1/2 relative">
						<input
							type="number"
							name="age"
							id="age"
							className="input-styles"
							placeholder="User Age"
							value={formik.values.age}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>

						{formik.values.age ? (
							<label
								htmlFor="age"
								className="text-commonColor absolute left-0 -top-4"
							>
								User Age:
							</label>
						) : (
							""
						)}

						{formik.errors.age && formik.touched.age && (
							<p className="text-red-500 text-sm">
								* {formik.errors.age}
							</p>
						)}
					</div>

					<div className="w-1/2 relative">
						<input
							type="email"
							name="email"
							id="email"
							className="input-styles"
							placeholder="User Email"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>

						{formik.values.email ? (
							<label
								htmlFor="email"
								className="text-commonColor absolute left-0 -top-4"
							>
								User Email:
							</label>
						) : (
							""
						)}

						{formik.errors.email && formik.touched.email && (
							<p className="text-red-500 text-sm">
								* {formik.errors.email}
							</p>
						)}
					</div>

					<div className="w-1/2 relative">
						<input
							type="password"
							name="password"
							id="password"
							className="input-styles"
							placeholder="User Password"
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>

						{formik.values.password ? (
							<label
								htmlFor="password"
								className="text-commonColor absolute left-0 -top-4"
							>
								User Password:
							</label>
						) : (
							""
						)}

						{formik.errors.password && formik.touched.password && (
							<p className="text-red-500 text-sm">
								* {formik.errors.password}
							</p>
						)}
					</div>

					<button type="submit" className="btn">
						send message
					</button>
				</form>
			</div>
		</>
	);
}
