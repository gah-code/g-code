import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import styled from 'styled-components'

const NodeGraphWrapper = styled.section`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  max-height: 600px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 75em) {
    max-width: 800px;
    max-height: 500px;
  }

  @media (max-width: 59em) {
    max-width: 600px;
    max-height: 450px;
  }

  @media (max-width: 34em) {
    max-width: 100%;
    max-height: 400px;
  }
`

const NodeGraph = () => {
  const svgRef = useRef()

  useEffect(() => {
    const svg = d3.select(svgRef.current)
    const width = 780
    const height = 750
    const margin = 50

    const nodes = [
      { id: 'HTML', value: 150, topic: 'Frontend' },
      { id: 'CSS', value: 150, topic: 'Frontend' },
      { id: 'SCSS', value: 110, topic: 'Frontend' },
      { id: 'Styled Components', value: 90, topic: 'Frontend' },
      { id: 'Responsive Design', value: 100, topic: 'Design' },
      { id: 'JavaScript', value: 85, topic: 'Frontend' },
      { id: 'React', value: 80, topic: 'Frontend' },
      { id: 'Gatsby', value: 100, topic: 'Frontend' },
      { id: 'Netlify', value: 100, topic: 'Frontend' },
      { id: 'Siteimprove', value: 60, topic: 'Backend' },
      { id: 'Vite', value: 75, topic: 'Frontend' },
      { id: 'React Router', value: 70, topic: 'Frontend' },
      { id: 'Contentful', value: 70, topic: 'CMS' },
      { id: 'WordPress', value: 50, topic: 'CMS' },
      { id: 'adobe experience manager', value: 70, topic: 'CMS' },
      { id: 'SEO', value: 72, topic: 'Design' },
      { id: 'GraphQL', value: 60, topic: 'Backend' },
      { id: 'a11y', value: 70, topic: 'Design' },
      { id: 'Mongo DB', value: 30, topic: 'Backend' },
      { id: 'Supabase', value: 30, topic: 'Backend' },
      { id: 'Java Content Repository', value: 28, topic: 'Backend' },
      { id: 'Photoshop', value: 100, topic: 'Design' },
      { id: 'Redux', value: 35, topic: 'Frontend' },
      { id: 'Next JS', value: 35, topic: 'Frontend' },
    ]

    const links = [
      { source: 'HTML', target: 'CSS' },
      { source: 'SCSS', target: 'JavaScript' },
      { source: 'GraphQL', target: 'Contentful' },
      { source: 'GraphQL', target: 'Gatsby' },
      { source: 'SEO', target: 'React' },
      { source: 'JavaScript', target: 'React' },
      { source: 'React', target: 'Redux' },
      { source: 'React', target: 'JavaScript' },
      { source: 'React', target: 'React Router' },
      { source: 'Styled Components', target: 'CSS' },
      { source: 'Styled Components', target: 'SCSS' },
      { source: 'Mongo DB', target: 'Supabase' },
      { source: 'Java Content Repository', target: 'adobe experience manager' },
      { source: 'SEO', target: 'adobe experience manager' },
      { source: 'Siteimprove', target: 'adobe experience manager' },
      { source: 'SCSS', target: 'Responsive Design' },
      { source: 'React', target: 'Responsive Design' },
    ]

    const color = d3.scaleOrdinal(d3.schemeSet2)

    // Apply forces to the simulation
    const simulation = d3
      .forceSimulation(nodes)
      .force(
        'link',
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(120)
      )
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(width / 2, height / 2).strength(0.5)) // Adjust center strength
      .force(
        'collide',
        d3.forceCollide().radius((d) => d.value / 5 + 70)
      )
      .force(
        'x',
        d3
          .forceX(width / 3)
          .strength(0.3)
          .x((d) => Math.max(margin, Math.min(width - margin, d.x)))
      )
      .force(
        'y',
        d3
          .forceY(height / 3)
          .strength(0.3)
          .y((d) => Math.max(margin, Math.min(height - margin, d.y)))
      )

    svg.attr('viewBox', [0, 0, width, height]).style('font', '14px sans-serif')

    const link = svg
      .append('g')
      .attr('stroke', '#222')
      .attr('stroke-opacity', 0.8)
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke-width', 2)

    const nodeGroup = svg
      .append('g')
      .attr('stroke', '#222')
      .attr('stroke-width', 3)
      .selectAll('g')
      .data(nodes)
      .enter()
      .append('g')

    // Append circles to each node group
    nodeGroup
      .append('circle')
      .attr('r', (d) => Math.min(d.value / 4, 40))
      .attr('fill', (d) => color(d.topic))

    // Append text to display the title above the nodes
    nodeGroup
      .append('text')
      .attr('x', 5)
      .attr('y', (d) => -(d.value / 5 + 40))
      .attr('text-anchor', 'middle')
      .style('font-size', '1rem')
      .style('font-weight', '400')
      .style('text-transform', 'uppercase')
      .style('letter-spacing', '0.07em')
      .style('fill', '#222')
      .text((d) => d.id)

    simulation.on('tick', () => {
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y)

      nodeGroup.attr('transform', (d) => `translate(${d.x},${d.y})`)
    })

    function drag(simulation) {
      function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart()
        d.fx = d.x
        d.fy = d.y
      }

      function dragged(event, d) {
        d.fx = event.x
        d.fy = event.y
      }

      function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0)
        d.fx = null
        d.fy = null
      }

      return d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended)
    }
  }, [])

  return (
    <NodeGraphWrapper>
      <svg ref={svgRef} />
    </NodeGraphWrapper>
  )
}

export default NodeGraph

