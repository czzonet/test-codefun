import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './wode.module.scss';

export default function Wode() {
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
        <div className={`flex-row justify-center ${styles['group_2']}`}>
          <img
            className={`${styles['back_icon']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234009834202809352.png"
          />
          <span className={`${styles['header_title']}`}>我的</span>
        </div>
      </div>
      <div className={`flex-col ${styles['content']}`}>
        <div className={`flex-row ${styles['section_1']}`}>
          <img
            className={`${styles['head_image']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632328637855616.png"
          />
          <span className={`${styles['nickname']}`}>Fan Chen</span>
        </div>
        <div className={`flex-col ${styles['section_2']}`}>
          <span className={`${styles['page_title']}`}>我的订单</span>
          <div className={`flex-row ${styles['equal-division']}`}>
            <div className={`flex-col items-center ${styles['equal-division-item']}`}>
              <img
                className={`${styles['order_icon']}`}
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/60cc53db6338e50011dc3086/62fcc25617f9af00116de785/11c343daba34f80e9f51260fa869b5ef.png"
              />
              <span className={`${styles['order_manu_text']}`}>待付款</span>
            </div>
            <div className={`flex-col items-center ${styles['equal-division-item']}`}>
              <img
                className={`${styles['order_icon']}`}
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632337794454995.png"
              />
              <span className={`${styles['order_manu_text']}`}>待使用</span>
            </div>
            <div className={`flex-col items-center ${styles['equal-division-item']}`}>
              <img
                className={`${styles['order_icon']}`}
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632337834988033.png"
              />
              <span className={`${styles['order_manu_text']}`}>待评价</span>
            </div>
            <div className={`flex-col items-center ${styles['equal-division-item']}`}>
              <img
                className={`${styles['order_icon']}`}
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632337859367126.png"
              />
              <span className={`${styles['order_manu_text']}`}>退款/售后</span>
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['section_3']}`}>
          <div className={`flex-row`}>
            <div className={`flex-col items-center ${styles['image-wrapper']}`}>
              <img
                className={`${styles['manu_icon']}`}
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/60cc53db6338e50011dc3086/62fcc25617f9af00116de785/2c3a4658e76a6e573921d83d6f875bca.png"
              />
            </div>
            <span className={`${styles['manu_text']}`}>我的浏览记录</span>
          </div>
          <div className={`flex-row ${styles['group_9']}`}>
            <img
              className={`${styles['image_10']} ${styles['manu_icon2']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632328709050413.png"
            />
            <span className={`${styles['manu_text']}`}>我的收藏</span>
          </div>
          <div className={`flex-row ${styles['group_10']}`}>
            <img
              className={`${styles['manu_icon2']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/60cc53db6338e50011dc3086/62fcc25617f9af00116de785/21b67446fbf45b66e7d7c917011bd0e2.png"
            />
            <span className={`${styles['manu_text']}`}>我的预约</span>
          </div>
        </div>
        <div className={`flex-row ${styles['section_4']}`}>
          <img
            className={`${styles['manu_icon2']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632328724869484.png"
          />
          <span className={`${styles['manu_text']}`}>咨询热线</span>
        </div>
        <div className={`flex-col ${styles['section_5']}`}>
          <div className={`flex-row ${styles['group_11']}`}>
            <img
              className={`${styles['manu_icon2']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/60cc53db6338e50011dc3086/62fcc25617f9af00116de785/f0bb102a5d7cf722957ed4683149706f.png"
            />
            <span className={`${styles['manu_text']}`}>服务条款</span>
          </div>
          <div className={`flex-row ${styles['group_9']}`}>
            <img
              className={`${styles['manu_icon2']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632328615957223.png"
            />
            <span className={`${styles['manu_text']}`}>我要反馈</span>
          </div>
          <div className={`flex-row ${styles['group_12']}`}>
            <img
              className={`${styles['manu_icon2']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632337181384256.png"
            />
            <span className={`${styles['manu_text']}`}>关于我们</span>
          </div>
        </div>
      </div>
    </div>
  );
}