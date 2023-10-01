import React from 'react';
import { Collapse } from 'antd';
import { AccordionData, stylePanel} from "./accordion.const";

function AccordionApp(){
    return (
        <Collapse accordion defaultActiveKey={['0']}>
            {AccordionData.map((item, index) => (
                <Collapse.Panel header={item.title} key={index} style={{ ...stylePanel}}>
                    <p> {item.description} </p>
                </Collapse.Panel>
            ))}
        </Collapse>
    )
}
export {AccordionApp};