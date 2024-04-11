import { bannerData } from "../../assets/BannerData";

const BannerGrid = () => {
  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-3 gap-4 p-4 bg-gray-100 rounded-3xl mb-5">
        {bannerData.map((bannerRow, index) => (
          <div key={index} className="flex flex-col justify-center gap-2 ">
            {bannerRow.map((banner) => (
              <div
                key={banner.id}
                className="flex justify-center items-center border-none p-2 bg-white  w-[120px] h-[120px] rounded-lg cursor-pointer"
                style={{ boxShadow: "-5px 5px 20px 0.5px rgba(0, 0, 0, 0.4)" }}
              >
                <img
                  src={banner.image}
                  alt={`Banner ${banner.id}`}
                  className="w-20 h-20 object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerGrid;
