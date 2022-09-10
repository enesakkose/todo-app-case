import SVG from "react-inlinesvg";

function Icon({ name, size = 16, ...props }) {
	return (
		<SVG
			src={`../../public/icons/${name}.svg`}
			width={size}
			height={size}
			{...props}
		/>
	)
}

export default Icon