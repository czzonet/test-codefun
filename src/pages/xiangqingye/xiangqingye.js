import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './xiangqingye.module.scss';

export default function Xiangqingye() {
  const history = useHistory();

  const data = {};

  return (
    <div className={`flex-col ${styles['page']}`}>
      <div className={`flex-col ${styles['header']}`}>
        <div className={`flex-row justify-between ${styles['group']}`}>
          <span className={`${styles['time']}`}>9:41</span>
          <div className={`flex-row ${styles['group_1']}`}>
            <img
              className={`${styles['signal']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234009834185347774.png"
            />
            <img
              className={`${styles['wifi']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234009834150509331.png"
            />
            <img
              className={`${styles['battery']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/60cc53db6338e50011dc3086/62fcc25617f9af00116de785/1725fca8dcf60a83d3d881a28b7c3972.png"
            />
          </div>
        </div>
        <div className={`flex-row justify-center ${styles['section_1']}`}>
          <img
            className={`${styles['back_icon']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234009834202809352.png"
          />
          <span className={`${styles['header_title']}`}>空间详情</span>
        </div>
      </div>
      <div className={`flex-col ${styles['content']}`}>
        <div className={`flex-col`}>
          <div className={`flex-col items-start`}>
            <span className={`${styles['page_title']}`}>维新软件科学园</span>
            <span className={`${styles['address_text']}`}>深圳市南山区中心路3331号</span>
          </div>
          <img
            className={`${styles['banner_image']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234009955010780805.png"
          />
        </div>
        <div className={`flex-col ${styles['group_5']}`}>
          <span className={`${styles['page_title']}`}>简介</span>
          <span className={`${styles['paragraph_text']}`}>
            FF办公空间之维新软件科学园，全新一站式办公空间与生活中心。地处深圳湾超级总部基地，与深圳宝安机场这样的国际化交通枢纽链接，使这处办公空间尽享得天独厚的地理优势，助您的事业通达全球。
          </span>
        </div>
        <div className={`flex-col ${styles['group_6']}`}>
          <span className={`${styles['page_title']}`}>价格</span>
          <span className={`${styles['subtitle']}`}>专属办公室</span>
          <div className={`flex-row justify-between ${styles['group_7']}`}>
            <span className={`${styles['list_text']}`}>1 ~ 4 人</span>
            <div className={`flex-row`}>
              <span className={`${styles['price']}`}>¥2,240</span>
              <span className={`${styles['unit']}`}>起/工位/月</span>
            </div>
          </div>
          <div className={`flex-row justify-between ${styles['group_9']}`}>
            <span className={`${styles['list_text']}`}>5 ~ 10 人</span>
            <div className={`flex-row`}>
              <span className={`${styles['price']}`}>¥2,180</span>
              <span className={`${styles['unit']}`}>起/工位/月</span>
            </div>
          </div>
          <div className={`flex-row justify-between ${styles['group_11']}`}>
            <span className={`${styles['list_text']}`}>10+ 人</span>
            <div className={`flex-row`}>
              <span className={`${styles['price']}`}>¥2,120</span>
              <span className={`${styles['unit']}`}>起/工位/月</span>
            </div>
          </div>
        </div>
        <div className={`flex-col items-center ${styles['button']}`}>
          <span className={`${styles['button_text']}`}>预约参观</span>
        </div>
      </div>
    </div>
  );
}