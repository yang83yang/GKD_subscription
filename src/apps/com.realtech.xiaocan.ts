import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.realtech.xiaocan',
  name: '小蚕霸王餐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          quickFind: true,
          matches: '[text^="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/12843368',
            'https://i.gkd.li/import/13363222',
            'https://i.gkd.li/import/13363246',
          ],
        },
        {
          key: 2,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
          snapshotUrls: [
            'https://i.gkd.li/import/13694858',
            'https://i.gkd.li/import/13794403',
            'https://i.gkd.li/import/12854728',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.realtech.xiaocan.MainActivity',
          matches:
            'View[childCount=3] > View + ImageView + ImageView[clickable=true][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/13694864',
        },
        {
          key: 1,
          name: '签到后抽奖弹窗',
          activityIds: 'com.realtech.xiaocan.MainActivity',
          matches:
            '[id="android:id/content"] >5 View[childCount=6] > ImageView[index=5][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/2d3008c8-0ef3-4165-bd2c-325f4b602f17',
          snapshotUrls: 'https://i.gkd.li/import/14290847',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-签到成功弹窗',
      desc: '自动点击[关闭]按钮',
      activityIds: 'com.realtech.xiaocan.MainActivity',
      rules:
        'View[childCount=6][desc!=""] > View[index=4] + ImageView[index=5][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/14290847',
    },
  ],
});
