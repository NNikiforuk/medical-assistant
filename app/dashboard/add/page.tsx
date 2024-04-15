"use client";

import Input from "@/components/common/Input/Input";
import "../../../styles/edit-add.scss";
import { FormEvent, useEffect, useState } from "react";
import Button from "@/components/common/Button/Button";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { fetchAdding } from "@/lib/fetchAdding";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import MySelect from "@/components/common/Select/Select";
import Popup from "@/components/common/Popup/Popup";

const Add = () => {
	const [hour, setHour] = useState("");
	const [name, setName] = useState("");
	const [dosage, setDosage] = useState("");
	const [loggedUserEmail, setLoggedUserEmail] = useState("");
	const [popup, setPopup] = useState(false);
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
			handleOpenPopup();
		}
	};

	const handleClosePopup = () => {
		setPopup(false);
	};

	const handleOpenPopup = () => {
		setPopup(true);
	};

	return (
		<section className="add">
			{popup && (
				<Popup
					handleClose={handleClosePopup}
					popup={popup}
					text="This medicine is already added"
				/>
			)}

			<div className="add__btn">
				<Link href="/dashboard">
					<RxCross1 />
				</Link>
			</div>
			<form className="add__form" onSubmit={handleAdding}>
				<MySelect onChange={(e: any) => setHour(e.value)} value={hour} />
				<Input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					label="Name"
					maxLength={8}
				/>
				<Input
					value={dosage}
					onChange={(e) => setDosage(e.target.value)}
					type="text"
					label="Dosage"
				/>

				<Button type="submit" variant="primary" label="Add" />
			</form>
		</section>
	);
};

export default Add;
