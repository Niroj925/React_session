import React from 'react'
import {Timeline,TimelineItem,TimelineSeparator,TimelineConnector,TimelineContent,TimelineDot,TimelineOppositeContent} from "@mui/lab"

function MuiTimeline() {
  return (
   <Timeline>
    <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>7:00 AM</TimelineOppositeContent>
        <TimelineSeparator>
         <TimelineDot color='secondary' variant='outlined'/>
         <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
           TimeLine A
        </TimelineContent>
    </TimelineItem>
    <TimelineItem>
    <TimelineOppositeContent color='text.secondary'>9:00 AM</TimelineOppositeContent>
        <TimelineSeparator>
         <TimelineDot color='secondary' variant='outlined'/>
         <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
           TimeLine B
        </TimelineContent>
    </TimelineItem>
    <TimelineItem>
    <TimelineOppositeContent color='text.secondary'>10:00 AM</TimelineOppositeContent>
        <TimelineSeparator>
         <TimelineDot color='secondary' variant='outlined'/>
        
        </TimelineSeparator>
        <TimelineContent>
        TimeLine C
        </TimelineContent>
    </TimelineItem>
   </Timeline>
  )
}

export default MuiTimeline