import { currencyFormatter } from "@libs/utils"

const MovieInformation = ({ movieInfo = {} }) => {
  return (
    <div>
      <p className="font-bold text-[1.4vw] mb-4">Information</p>
      <div>
        <div className="mb-4">
          <p className="font-bold text-[1.4vw]">Original Title</p>
          <p className="text-[1.2vw]">{movieInfo.original_title}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold text-[1.4vw]">Status</p>
          <p className="text-[1.2vw]">{movieInfo.status}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold text-[1.4vw]">Original Country</p>
          <p className="text-[1.2vw]">{(movieInfo.origin_country || []).map((countryCode) => {
            return (
              <img
                key={countryCode}
                src={`https://flagcdn.com/16x12/${countryCode.toLowerCase()}.png`}
                className="mt-1 w-[1.3vw]"
                width={16}
                height={12}
              />
            )
          })}

          </p>
        </div>
        <div className="mb-4">
          <p className="font-bold text-[1.4vw]">Budget</p>
          <p className="text-[1.2vw]">{currencyFormatter(movieInfo.budget)}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold text-[1.4vw]">Revenue</p>
          <p className="text-[1.2vw]">{currencyFormatter(movieInfo.revenue)}</p>
        </div>
      </div>
    </div>
  )
}
export default MovieInformation