import { Component, ElementRef, NgZone } from '@angular/core';
import DataSet from '@antv/data-set';
import { Chart } from '@antv/g2';

@Component({
  selector: 'app-chart-relation',
  template: ` <g2-custom (render)="render($event)"></g2-custom> `,
})
export class ChartRelationComponent {
  constructor(private ngZone: NgZone) {}
  render(el: ElementRef<HTMLDivElement>): void {
    this.ngZone.runOutsideAngular(() => this.init(el.nativeElement));
  }

  private init(el: HTMLElement): void {
    // const data: Array<{ action: string; pv: number; percent: number }> = [
    //   { action: '浏览网站', pv: 50000, percent: 0 },
    //   { action: '放入购物车', pv: 35000, percent: 0 },
    //   { action: '生成订单', pv: 25000, percent: 0 },
    //   { action: '支付订单', pv: 15000, percent: 0 },
    //   { action: '完成交易', pv: 8000, percent: 0 },
    // ].map((row) => {
    //   row.percent = row.pv / 50000;
    //   return row;
    // });
    const { DataView } = DataSet;
    const data = {
      name: 'root',
      children: [
        { name: '分类 1', value: 560 },
        { name: '分类 2', value: 500 },
        { name: '分类 3', value: 150 },
        { name: '分类 4', value: 140 },
        { name: '分类 5', value: 115 },
        { name: '分类 6', value: 95 },
        { name: '分类 7', value: 90 },
        { name: '分类 8', value: 75 },
        { name: '分类 9', value: 98 },
        { name: '分类 10', value: 60 },
        { name: '分类 11', value: 45 },
        { name: '分类 12', value: 40 },
        { name: '分类 13', value: 40 },
        { name: '分类 14', value: 35 },
        { name: '分类 15', value: 40 },
        { name: '分类 16', value: 40 },
        { name: '分类 17', value: 40 },
        { name: '分类 18', value: 30 },
        { name: '分类 19', value: 28 },
        { name: '分类 20', value: 16 },
      ],
    };
    const dv = new DataView();
    dv.source(data, {
      type: 'hierarchy',
    }).transform({
      field: 'value',
      type: 'hierarchy.treemap',
      tile: 'treemapResquarify',
      as: ['x', 'y'],
    });

    // 将 DataSet 处理后的结果转换为 G2 接受的数据
    const nodes = [];
    for (const node of dv.getAllNodes()) {
      if (node.data.name === 'root') {
        continue;
      }
      const eachNode: any = {
        name: node.data.name,
        x: node.x,
        y: node.y,
        value: node.data.value,
      };

      nodes.push(eachNode);
    }

    const chart = new Chart({
      container: 'container',
      autoFit: true,
      height: 500,
    });
    chart.data(nodes);
    chart.scale({
      x: {
        nice: true,
      },
      y: {
        nice: true,
      },
    });

    chart.axis(false);
    chart.legend(false);
    chart.tooltip({
      showTitle: false,
      showMarkers: false,
      itemTpl:
        '<li style="list-style: none;">' +
        '<span style="background-color:{color};" class="g2-tooltip-marker"></span>' +
        '{name}<br/>' +
        '<span style="padding-left: 16px">浏览人数：{count}</span><br/>' +
        '</li>',
    });
    chart
      .polygon()
      .position('x*y')
      .color('name')
      .tooltip('name*value', (name, count) => {
        return {
          name,
          count,
        };
      })
      .style({
        lineWidth: 1,
        stroke: '#fff',
      })
      .label('name', {
        offset: 0,
        style: {
          textBaseline: 'middle',
        },
        content: (obj) => {
          if (obj.name !== 'root') {
            return obj.name;
          }
        },
      });
    chart.interaction('element-active');

    // const chart = new Chart({
    //   container: el,
    //   autoFit: true,
    //   height: 500,
    //   width: el.clientWidth,
    //   padding: [20, 120, 95],
    // });
    // chart.data(data);
    // chart.axis(false);
    // chart.tooltip({
    //   showTitle: false,
    //   showMarkers: false,
    //   itemTpl:
    //     '<li style="margin-bottom:4px;list-style-type:none;padding: 0;">' +
    //     '<span style="background-color:{color};" class="g2-tooltip-marker"></span>' +
    //     '{name}<br/>' +
    //     '<span style="padding-left: 16px;line-height: 16px;">浏览人数：{pv}</span><br/>' +
    //     '<span style="padding-left: 16px;line-height: 16px;">占比：{percent}</span><br/>' +
    //     '</li>',
    // });

    // chart.coordinate('rect').transpose().scale(1, -1);
    // chart
    //   .interval()
    //   .adjust('symmetric')
    //   .position('action*percent')
    //   .shape('funnel')
    //   .color('action', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF'])
    //   .label(
    //     'action*pv',
    //     (action, pv) => {
    //       return {
    //         content: `${action} ${pv}`,
    //       };
    //     },
    //     {
    //       offset: 35,
    //       labelLine: {
    //         style: {
    //           lineWidth: 1,
    //           stroke: 'rgba(0, 0, 0, 0.15)',
    //         },
    //       },
    //     },
    //   )
    //   .tooltip('action*pv*percent', (action, pv, percent) => {
    //     return {
    //       name: action,
    //       percent: +percent * 100 + '%',
    //       pv,
    //     };
    //   })
    //   .animate({
    //     appear: {
    //       animation: 'fade-in',
    //     },
    //     update: {
    //       // annotation: 'fade-in'
    //     },
    //   });

    // chart.interaction('element-active');

    // chart.on('beforepaint', () => {
    //   chart.annotation().clear(true);
    //   const chartData = chart.getData();
    //   // 中间标签文本
    //   chartData.forEach((obj) => {
    //     chart.annotation().text({
    //       top: true,
    //       position: {
    //         action: obj.action,
    //         percent: 'median',
    //       },
    //       content: +obj.percent * 100 + '%', // 显示的文本内容
    //       style: {
    //         stroke: null,
    //         fill: '#fff',
    //         textAlign: 'center',
    //       },
    //     });
    //   });
    // });

    chart.render();
  }
}
