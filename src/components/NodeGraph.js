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
    const svgElement = svgRef.current
    const svg = d3.select(svgElement)

    const renderGraph = () => {
      // Clear previous content
      svg.selectAll('*').remove()

      const { width, height } = svgElement.getBoundingClientRect()
      const margin = 50

      const nodes = [
        { id: 'HTML', value: 100, topic: 'Core Frontend Skills' },
        { id: 'CSS', value: 100, topic: 'Core Frontend Skills' },
        { id: 'SCSS', value: 80, topic: 'Frontend Styling' },
        { id: 'Styled Components', value: 90, topic: 'Frontend Styling' },
        { id: 'JavaScript', value: 85, topic: 'Core Frontend Skills' },
        { id: 'React', value: 80, topic: 'Frontend Frameworks' },
        { id: 'Gatsby', value: 90, topic: 'Frontend Frameworks' },
        { id: 'Netlify', value: 100, topic: 'Deployment Platforms' },
        { id: 'Siteimprove', value: 60, topic: 'Accessibility & QA Tools' },
        { id: 'Vite', value: 75, topic: 'Build Tools' },
        { id: 'React Router', value: 70, topic: 'Frontend Frameworks' },
        { id: 'Contentful', value: 70, topic: 'CMS Integration' },
        { id: 'WordPress', value: 50, topic: 'CMS Integration' },
        { id: 'AEM', value: 70, topic: 'CMS Integration' },
        { id: 'SEO', value: 72, topic: 'Web Optimization' },
        { id: 'GraphQL', value: 60, topic: 'Backend Integration' },
        { id: 'a11y', value: 70, topic: 'Accessibility' },
        { id: 'Mongo DB', value: 30, topic: 'Databases' },
        { id: 'Supabase', value: 30, topic: 'Databases' },
        { id: 'Java Content Repository', value: 28, topic: 'Backend Integration' },
        { id: 'Photoshop', value: 100, topic: 'Design Tools' },
        { id: 'Redux', value: 35, topic: 'State Management' },
        { id: 'Next JS', value: 35, topic: 'Frontend Frameworks' },
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
        { source: 'Java Content Repository', target: 'AEM' },
        { source: 'SEO', target: 'AEM' },
        { source: 'Siteimprove', target: 'AEM' },
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
            .distance(100)
        )
        .force('charge', d3.forceManyBody().strength(-300))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force(
          'collide',
          d3.forceCollide().radius((d) => d.value / 5 + 20)
        )
        .force('x', d3.forceX(width / 2).strength(0.1))
        .force('y', d3.forceY(height / 2).strength(0.1))

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
        .attr('r', (d) => Math.min(d.value / 6, 30))
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
        .style('letter-spacing', '0.09em')
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
    }

    renderGraph()

    const handleResize = () => {
      renderGraph()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <NodeGraphWrapper>
      <svg ref={svgRef} />
    </NodeGraphWrapper>
  )
}

export default NodeGraph

