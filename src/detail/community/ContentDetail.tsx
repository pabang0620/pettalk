import Image from 'next/image';

const ContentDetail = () => {
  return (
    <>
      <div className="contentWrapper">
        <div className="header">
          <div className="searchBox">
            <div></div>
            <button className="searchButton">
              <Image
                src="/images/searchIcon.png"
                alt="search-icon"
                width={20}
                height={18}
              />
            </button>
          </div>
          <button className="editButton">글 쓰기</button>
        </div>
        <div className="contentBox">내용 부분 <br/> 구분을 위해 일단 색을 채워넣음</div>
      </div>
      <style jsx>{`
        .contentWrapper {
          width: 90%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .header {
          display: flex;
          flex-direction: row;
          width: 50%;
          justify-content: space-between;
        }
        .searchBox {
          background-color: #ffedcf;
          border: 2px solid #f4d6a8;
          border-radius: 5px;
          width: 360px;
          height: 30px;
          position: relative;
        }
        .searchButton {
          position: absolute;
          right: 0px;
          padding-right: 5px;
          padding-left: 9px;
          width: 35px;
          height: 30px;
          border: none;
          background-color: inherit;
          display: flex;
          align-items: center;
        }
        .searchButton:hover {
          background-color: #f4d6a8;
        }
        .editButton {
          width: 100px;
          height: 33px;
          border: 2px solid #f4d6a8;
          border-radius: 5px;
          background-color: #ffedcf;
          font-weight: 600;
        }
        .editButton:hover {
          background-color: #f4d6a8;
        }
        .contentBox {
          width: 100%;
          margin-top: 20px;
          height: 86.5%;
          border-radius: 10px;
          background-color: #ffedcf;
        }
      `}</style>
    </>
  );
};

export default ContentDetail;