interface BuyMeACoffeeProps {
  width?: number
  height?: number
  className?: string
}

function BuyMeACoffee({
  width = 250,
  height = 50,
  className,
}: BuyMeACoffeeProps) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <a href="https://www.buymeacoffee.com">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=xxxxxx&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff"
          width={width}
          height={height}
          alt="buy me a coffee"
          className="my-4"
        />
      </a>
    </div>
  )
}

export default BuyMeACoffee
