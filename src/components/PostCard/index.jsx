import PropTypes from "prop-types";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";

function PostCard({ userName, contentType, postContent, postComments }) {
  return (
    <div
      className={`bg-[#27292d] flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto box-border pt-[26px] pb-[25px] px-[22px] rounded-lg border-2 border-[#35373b] border-solid`}
    >
      <div
        className={`flex justify-between items-center flex-row gap-2 grow-0 shrink-0 basis-auto box-border`}
      >
        <div
          className={`flex justify-start items-center flex-row grow-0 shrink-0 basis-auto box-border`}
        >
          <div className={`grow-0 shrink-0 basis-auto box-border`}>
            <img
              className={`w-11 h-11 max-w-[initial] box-border object-cover block rounded-[50%] border-[none]`}
              src={`https://picsum.photos/seed/${userName}/200/300`}
              alt="Profile Photo"
            />
          </div>
          <div className={`grow-0 shrink-0 basis-auto box-border ml-4`}>
            <p
              className={`box-border [font-family:Inter] text-base font-medium text-[#c5c7ca]`}
            >
              {userName || "Theresa Webb"}
            </p>
            <p
              className={`box-border [font-family:Inter] text-sm font-medium text-[#7f8084] mt-1`}
            >
              5mins ago
            </p>
          </div>
        </div>
        <SvgIcon1 className="grow-0 shrink-0 basis-auto box-border w-5 h-5 text-[#c5c7ca] flex" />
      </div>
      <div
        className={`bg-[#191920] flex justify-start items-start flex-row grow-0 shrink-0 basis-auto box-border mt-5 pt-[15px] pb-[21.5px] px-4 rounded-lg`}
      >
        <div className={`grow-0 shrink-0 basis-auto box-border pb-[22.5px]`}>
          <div
            className={`bg-[#27292d] flex justify-center items-stretch flex-col h-12 box-border px-[15px] rounded-[50%]`}
          >
            <p
              className={`grow-0 shrink-0 basis-auto box-border [font-family:Inter] text-lg font-medium text-[black]`}
            >
              {contentType || "👋"}
            </p>
          </div>
        </div>
        <p
          className={`grow-0 shrink basis-auto box-border [font-family:Inter] text-base font-normal leading-[123.94366455078125%] text-[#7f8084] ml-4`}
        >
          {postContent ||
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
        </p>
      </div>
      <div
        className={`flex justify-start items-center flex-row grow-0 shrink-0 basis-auto box-border mt-3`}
      >
        <SvgIcon2 className="grow-0 shrink-0 basis-auto box-border w-5 h-5 text-[#c5c7ca] flex" />
        <p
          className={`grow-0 shrink-0 basis-auto box-border [font-family:Inter] text-sm font-medium text-[#7f8084] ml-2`}
        >
          {postComments || "24 comments"}
        </p>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  contentType: PropTypes.string,
  userName: PropTypes.string.isRequired,
  userAvatar: PropTypes.string,
  postContent: PropTypes.string,
  postComments: PropTypes.string,
};

export default PostCard;
