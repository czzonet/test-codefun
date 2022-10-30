import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './shouye.module.scss';

export default function Shouye() {
  const history = useHistory();

  const data = {
    list_MflYm8P8: [null, null, null],
  };

  return (
    <div className={`flex-col ${styles['page']}`}>
      <div className={`flex-col ${styles['header']}`}>
        <div className={`flex-row justify-between`}>
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
        <span className={`${styles['header_title']}`}>FF办公空间</span>
      </div>
      <div className={`flex-col ${styles['content']}`}>
        <img
          className={`${styles['banner']}`}
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010093791214053.png"
        />
        <div className={`flex-row ${styles['equal-division']}`}>
          <div className={`flex-col items-center ${styles['equal-division-item']}`}>
            <img
              className={`${styles['manu_icon']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/60cc53db6338e50011dc3086/62fcc25617f9af00116de785/45b4e7289b37f56154aab442fbe878ec.png"
            />
            <span className={`${styles['manu_text']}`}>地图找楼</span>
          </div>
          <div className={`flex-col items-center ${styles['equal-division-item']}`}>
            <img
              className={`${styles['manu_icon']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/60cc53db6338e50011dc3086/62fcc25617f9af00116de785/0bd0bb4d36b778f945c84563de6d2356.png"
            />
            <span className={`${styles['manu_text']}`}>核心商圈</span>
          </div>
          <div className={`flex-col items-center ${styles['equal-division-item']}`}>
            <img
              className={`${styles['manu_icon']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/60cc53db6338e50011dc3086/62fcc25617f9af00116de785/e6ff79d6a0b9e960c7df41eb76f37229.png"
            />
            <span className={`${styles['manu_text']}`}>全景参观</span>
          </div>
          <div className={`flex-col items-center ${styles['equal-division-item']}`}>
            <img
              className={`${styles['manu_icon']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/60cc53db6338e50011dc3086/62fcc25617f9af00116de785/84c3c23951d803da5d922ec1f5fb4442.png"
            />
            <span className={`${styles['manu_text']}`}>咨询热线</span>
          </div>
        </div>
        <div className={`flex-col ${styles['group_7']}`}>
          <span className={`${styles['title']}`}>热推空间</span>
          <div className={`flex-col`}>
            {data.list_MflYm8P8.map((item, i) => (
              <div className={`flex-row ${styles['list-item']}`} key={i}>
                <img
                  className={`${styles['list_image']}`}
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010093853079242.png"
                />
                <div className={`flex-col ${styles['group_9']}`}>
                  <div className={`flex-col items-start`}>
                    <span className={`${styles['list_text']}`}>维新软件科学园</span>
                    <span className={`${styles['address']}`}>深圳市南山区中心路3331号</span>
                  </div>
                  <div className={`flex-row justify-end ${styles['group_11']}`}>
                    <span className={`${styles['price']}`}>¥1,870</span>
                    <span className={`${styles['unit']}`}>起/工位/月</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}