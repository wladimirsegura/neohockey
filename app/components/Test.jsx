"use client";
import { useRouter } from "next/navigation";
export default function Test() {
	const router = useRouter();
	const handleReload = () => {
		router.refresh();
	};
}
