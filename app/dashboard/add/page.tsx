"use client";

import Input from "@/components/common/Input/Input";
import "./add.scss";
import { FormEvent, useEffect, useState } from "react";
import Button from "@/components/common/Button/Button";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { fetchAdding } from "@/lib/fetchAdding";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Add = () => {
	const [hour, setHour] = useState("");
	const [name, setName] = useState("");
	const [dosage, setDosage] = useState("");
	const [loggedUserEmail, setLoggedUserEmail] = useState("");
	const { data: session, status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === "authenticated" && session?.user?.email) {
			setLoggedUserEmail(session.user.email);
		}
	}, [status, session]);

	const handleAdding = async (e: FormEvent) => {
		e.preventDefault();

		const isSuccess = await fetchAdding({
			hour,
			name,
			dosage,
			loggedUserEmail,
		});

		if (isSuccess) {
			router.replace("/dashboard");
			router.refresh();
		} else {
			console.error("Adding medicine failed");
		}
	};

	return (
		<section className="add">
			<div className="add__btn">
				<Link href="/dashboard">
					<RxCross1 />
				</Link>
			</div>
			<form className="add__form" onSubmit={handleAdding}>
				<Input
					value={hour}
					onChange={(e) => setHour(e.target.value)}
					type="time"
					label="Time"
					isError={false}
				/>
				<Input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					label="Name"
					isError={false}
				/>
				<Input
					value={dosage}
					onChange={(e) => setDosage(e.target.value)}
					type="text"
					label="Dosage"
					isError={false}
				/>

				<Button type="submit" variant="primary" label="Add" />
			</form>
		</section>
	);
};

export default Add;
