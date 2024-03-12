"use client";

import Input from "@/components/common/Input/Input";
import "./edit.scss";
import { useEffect, useState } from "react";
import Button from "@/components/common/Button/Button";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import Select from "@/components/common/Select/Select";
import { usePathname, useRouter } from "next/navigation";

const Edit = () => {
	const router = useRouter();
	const pathname = usePathname();
	const lastIndexOfSlash = pathname.lastIndexOf("/");
	const pillID = pathname.slice(lastIndexOfSlash + 1);
	const [pill, setPill] = useState({
		hour: "",
		name: "",
		dosage: "",
	});

	useEffect(() => {
		const getPillDetails = async () => {
			const response = await fetch(`/api/pills/${pillID}`);
			const data = await response.json();

			setPill({
				hour: data.hour || "",
				name: data.name || "",
				dosage: data.dosage || "",
			});
		};
		if (pillID) getPillDetails();
	}, [pillID]);

	const handleEditing = async (e: any) => {
		e.preventDefault();

		if (pillID) {
			try {
				const response = await fetch(`/api/edit/${pillID}`, {
					method: "PATCH",
					body: JSON.stringify({
						hour: pill.hour,
						name: pill.name,
						dosage: pill.dosage,
					}),
				});

				if (response.ok) {
					router.push("/dashboard");
					router.refresh();
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<section className="edit">
			<div className="edit__btn">
				<Link href="/dashboard">
					<RxCross1 />
				</Link>
			</div>
			<form className="edit__form" onSubmit={handleEditing}>
				<Select
					value={pill.hour}
					onChange={(e) =>
						setPill({
							...pill,
							hour: e.target.value,
						})
					}
				/>
				<Input
					value={pill.name}
					onChange={(e) =>
						setPill({
							...pill,
							name: e.target.value,
						})
					}
					type="text"
					label="Name"
					isError={false}
				/>
				<Input
					value={pill.dosage}
					onChange={(e) =>
						setPill({
							...pill,
							dosage: e.target.value,
						})
					}
					type="text"
					label="Dosage"
					isError={false}
				/>
				<Button type="submit" variant="primary" label="Edit" />
			</form>
		</section>
	);
};

export default Edit;
