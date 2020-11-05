<template>
  <div id="svje" class="flex flex-col svg-container">
    <Nav style="z-index: 1000" />
    <transition name="page">
      <nuxt ref="page" class="z-40" />
    </transition>
  </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  data() {
    return {
      w: 1200,
      h: 600,
    }
  },
  mounted() {
    this.d3function()
  },
  methods: {
    d3function() {
      var padding = 0
      var numDataPoints = 600
      var stripLen = Math.PI
      var strip = []
      var twist = []
      var mobius = []
      var shapenew = []
      var shapenewer = []
      var shapenewer1 = []
      var shapenewer2 = []
      var shapenewer3 = []
      var top = []
      var bottom = []
      var domaindom = 2
      for (var i = 0; i < numDataPoints; i++) {
        var t = (i * stripLen) / (numDataPoints - 1)
        var theta = (i * Math.PI * 2) / (numDataPoints - 1)
        var x_m = (stripLen / 2) * Math.cos(theta)
        var y_m = 0.5 * Math.sin(theta)
        strip.push([t - stripLen / 2, 0, 0, i])
        twist.push([t - stripLen / 2, 0, theta / 2, i])
        shapenew.push([x_m, y_m, theta / 5, i])
        shapenewer.push([x_m, y_m, theta / 6, i])
        shapenewer1.push([x_m, y_m, theta / 7, i])
        shapenewer2.push([x_m, y_m, theta / 9, i])
        shapenewer3.push([x_m, y_m, theta / 11, i])
        mobius.push([x_m, y_m, theta / 2, i])
      }
      var xScale = d3
        .scaleLinear()
        .domain([-1, 1])
        .range([padding, this.w - padding])
      var yScale = d3.scaleLinear().domain([-1, 1]).range([this.h, 1])
      var svg = d3
        .select('div#svje')
        .append('svg')
        .attr('preserveAspectRatio', 'xMinYMin meet')
        .attr('viewBox', '0 0 ' + this.w + ' ' + this.h)
        .classed('svg-content', true)
      var layer1 = svg.append('g')
      var layer2 = svg.append('g')
      svg
        .append('svg:defs')
        .append('svg:marker')
        .attr('id', 'arrow')
        .attr('viewBox', '0 0 10 10')
        .attr('refX', 28)
        .attr('refY', 5)
        .attr('markerUnits', 'strokeWidth')
        .attr('markerWidth', 12)
        .attr('markerHeight', 9)
        .attr('orient', 'auto')
        .append('svg:path')
        .attr('d', 'M 0 0 L 10 5 L 0 10 z')
      var topLine = d3
        .line()
        .curve(d3.curveBasis)
        .x(function (d) {
          return xScale(d[0] + pct * Math.sin(d[2]))
        })
        .y(function (d) {
          return yScale(d[1] + pct * Math.cos(d[2]))
        })
      var bottomLine = d3
        .line()
        .curve(d3.curveBasis)
        .x(function (d) {
          return xScale(d[0] - pct * Math.sin(d[2]))
        })
        .y(function (d) {
          return yScale(d[1] - pct * Math.cos(d[2]))
        })
      function update_strip() {
        var line = layer2.selectAll('.line').data(dataset, function (d, i) {
          return d[3]
        })
        line
          .transition()
          .duration(2500)
          .attr('x1', function (d) {
            return xScale(d[0] + 0.5 * Math.sin(d[2]))
          })
          .attr('y1', function (d) {
            return yScale(d[1] + 0.5 * Math.cos(d[2]))
          })
          .attr('x2', function (d) {
            return xScale(d[0] - 0.5 * Math.sin(d[2]))
          })
          .attr('y2', function (d) {
            return yScale(d[1] - 0.5 * Math.cos(d[2]))
          })
        line
          .enter()
          .append('line')
          .attr('x1', function (d) {
            return xScale(d[0] + 0.5 * Math.sin(d[2]))
          })
          .attr('y1', function (d) {
            return yScale(d[1] + 0.5 * Math.cos(d[2]))
          })
          .attr('x2', function (d) {
            return xScale(d[0] - 0.5 * Math.sin(d[2]))
          })
          .attr('y2', function (d) {
            return yScale(d[1] - 0.5 * Math.cos(d[2]))
          })
          .attr('class', 'line')
      }
      function updateArrow() {
        var arrows = layer2.selectAll('.arrow').data(arrow, function (d, i) {
          return d[0]
        })
        arrows
          .attr('x1', function (d) {
            return xScale(d[0])
          })
          .attr('x2', function (d) {
            return xScale(d[1])
          })
          .attr('y1', function (d) {
            return yScale(d[2])
          })
          .attr('y2', function (d) {
            return yScale(d[3])
          })
        arrows
          .enter()
          .append('line')
          .attr('x1', function (d) {
            return xScale(d[0])
          })
          .attr('x2', function (d) {
            return xScale(d[1])
          })
          .attr('y1', function (d) {
            return yScale(d[2])
          })
          .attr('y2', function (d) {
            return yScale(d[3])
          })
          .attr('marker-end', 'url(#arrow)')
          .attr('class', 'arrow')
      }
      function updateHorizontalLines() {
        var dataset_subset = dataset.filter(function (d, i) {
          return i % 10 == 0
        })
        dataset_subset.push(dataset[numDataPoints - 1])
        var top = layer2.selectAll('.top').data(dataset_subset)
        top
          .transition()
          .delay(2500)
          .duration(2500)
          .attr('d', function (d) {
            return topLine(dataset_subset)
          })
          .transition()
          .attr('opacity', 0)
        top
          .enter()
          .append('path')
          .attr('class', 'curve top')
          .transition()
          .delay(2500)
          .attr('d', function (d) {
            return topLine(dataset_subset)
          })
        var bottom = layer2.selectAll('.bottom').data(dataset_subset)
        bottom
          .transition()
          .delay(2500)
          .duration(2500)
          .attr('d', function (d) {
            return bottomLine(dataset_subset)
          })
          .transition()
          .attr('opacity', 0)
        bottom
          .enter()
          .append('path')
          .attr('class', 'curve bottom')
          .transition()
          .delay(2500)
          .attr('d', function (d) {
            return bottomLine(dataset_subset)
          })
      }
      var dataset = []
      dataset = mobius
      var state = 0
      update_strip()
      var pct = -0.5
      for (pct = -0.5; pct <= 0.5; pct = pct + 0.1) {
        updateHorizontalLines()
      }

      var arrow = [
        [stripLen / 2 + 0.5, stripLen / 2 + 0.5, 1.5, 1],
        [stripLen / 2, stripLen / 2, 1, 1.5],
        [stripLen / 2, stripLen / 2 + 0.5, 1.5, 1.5],
        [stripLen / 2, stripLen / 2 + 0.5, 1, 1],
      ]

      function update() {
        state++
        switch (state) {
          case 1:
            dataset = twist
            break
          case 2:
            dataset = mobius
            break
          case 3:
            dataset = []
            dataset = shapenew
            state = 0
        }
        update_strip()
        layer2.selectAll('.curve').remove()
        for (pct = -0.5; pct <= 0.5; pct = pct + 0.1) {
          updateHorizontalLines()
        }
      }

      d3.select('body').on('click', update)
      d3.select('body').on('touchstart', update)
    },
  },
}
</script>

<style>
.svg-content {
  width: 100%;
  height: 81%;
  position: absolute;
  z-index: -5;

  @media (max-width: 369px) {
    display: none;
  }

  @media (min-width: 370px) {
    display: none;
  }

  @media (min-width: 470px) {
    margin-top: 40%;
    display: block;
  }

  @media (min-width: 580px) {
    margin-top: 30%;
    display: block;
  }

  @media (min-width: 680px) {
    margin-top: 18%;
    display: block;
  }

  @media (min-width: 780px) {
    margin-top: 16%;
    display: block;
  }

  @media (min-width: 880px) {
    margin-top: 12%;
    display: block;
  }

  @media (min-width: 980px) {
    margin-top: 10%;
    display: block;
  }

  @media (min-width: 1080px) {
    margin-top: 8%;
    display: block;
  }

  @media (min-width: 1180px) {
    margin-top: 6%;
    display: block;
  }

  @media (min-width: 1280px) {
    margin-top: 4%;
    display: block;
  }

  @media (min-width: 1380px) {
    margin-top: 2%;
    display: block;
  }
}

.line {
  fill: none;
  stroke: #e6ebf1;
  --stroke-width: 1px;
  stroke-width: var(--stroke-width);
}
.curve {
  fill: none;
  stroke: #e6ebf1;
  stroke-width: 1px;
}
.arrow {
  stroke: #e6ebf1;
  stroke-width: 2;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 2s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
