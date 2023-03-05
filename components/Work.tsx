import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { MdWorkOutline } from 'react-icons/md';

type Props = {}

const Work = (props: Props) => {
  return (
    <div className='bg-slate-100'>
      <h3 className='titleMain'>Works</h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<MdWorkOutline />}
        >
          <h3 className="vertical-timeline-element-title">Duy Tan Univesity</h3>
          <img
            src="https://cdn.duytan.edu.vn/images/icon/logo-duy-tan_vn.png"
            alt=""
            className='w-[100px] object-cover'
          />
          <p>
            Studying software engineering at DTU university
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - current"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<MdWorkOutline />}
        >
          <h3 className="vertical-timeline-element-title">Tomosia Company</h3>
          <img
            src="https://www.tomosia.com/img/logo/company-logo-dark@2x.png"
            alt=""
            className='w-[100px] object-cover'
          />
          <p>
            Position: Fullstack development
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Work
