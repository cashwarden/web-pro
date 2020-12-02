import { Component, ElementRef, Input, NgZone } from '@angular/core';
import DataSet from '@antv/data-set';
import { Chart } from '@antv/g2';

@Component({
  selector: 'app-chart-relation',
  template: ` <g2-custom (render)="render($event)"></g2-custom> `,
})
export class ChartRelationComponent {
  @Input() items: any = {};
  visible = false;
  constructor(private ngZone: NgZone) {}

  render(el: ElementRef<HTMLDivElement>): void {
    this.ngZone.runOutsideAngular(() => this.init(el.nativeElement));
  }

  private init(el: HTMLElement): void {
    const { DataView } = DataSet;
    const data = {
      name: 'root',
      children: this.items,
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
        percent: node.data.percent,
      };

      nodes.push(eachNode);
    }
    const chart = new Chart({
      container: el,
      autoFit: true,
      height: 500,
    });
    chart.data(nodes);

    chart.axis(false);
    chart.legend(false);
    chart.tooltip({
      showTitle: false,
      showMarkers: false,
      itemTpl:
        '<li style="list-style: none;">' +
        '<span style="background-color:{color};" class="g2-tooltip-marker"></span>' +
        '{name}<br/>' +
        '<span style="padding-left: 16px">金额：{count}</span><br/>' +
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
            return `${obj.name} \n ${obj.percent}`;
          }
        },
      });
    chart.interaction('element-active');

    chart.render();
  }
}
