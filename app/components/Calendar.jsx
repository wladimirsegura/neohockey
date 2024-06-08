import { Section } from "@radix-ui/themes";
import Iframe from "react-iframe";

const Calendar = () => {
	return (
		<Section id="calendar" className="max-w-3xl m-auto ">
			<Iframe
				className="w-full min-h-[400px] rounded-sm"
				src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FTokyo&bgcolor=%23ffffff&showTz=0&showTabs=0&showPrint=0&src=NjE5OTBmYjRmNzc2OTljZDRhZTczYzViYTAyMzQ5ZGFiMjZmNjg2NzAwZTY0YzJlYWMwYzVkNzI0ZGJiN2MzZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23616161"
				scrolling="no"
			></Iframe>
		</Section>
	);
};
export default Calendar;
<iframe
	src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FTokyo&bgcolor=%23ffffff&showTz=0&showTabs=0&showPrint=0&src=NjE5OTBmYjRmNzc2OTljZDRhZTczYzViYTAyMzQ5ZGFiMjZmNjg2NzAwZTY0YzJlYWMwYzVkNzI0ZGJiN2MzZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23616161"
	style="border:solid 1px #777"
	width="800"
	height="600"
	frameborder="0"
	scrolling="no"
></iframe>;
