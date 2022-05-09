import React from 'react';
import { useTranslation } from 'react-i18next';
import { Progress, Table } from 'reactstrap';
import Panel from '../../../../shared/components/Panel';


const header = [
  { id: 0, title: 'Region' },
  { id: 1, title: 'Page views' },
  { id: 2, title: 'Device' },
  { id: 3, title: 'Bounce rate' },
];

const rows = [
  {
    id: 0,
    country: 'Kunene',
    page_views: '12134',
    device: 'Desktop',
    value: 41,
    bounce_rate: '41%',
  }, {
    id: 1,
    country: 'Omusati ',
    page_views: '47584',
    device: 'Mobile',
    bounce_rate: 30,
  }, {
    id: 2,
    country: 'Oshana',
    page_views: '24235',
    device: 'Desktop',
    value: 65,
  }, {
    id: 3,
    country: 'Ohangwena',
    page_views: '2255',
    device: 'Desktop',
    value: 41,
  }, {
    id: 4,
    country: 'Oshikoto',
    page_views: '2421',
    device: 'Tablet',
    value: 31,
  }, {
    id: 5,
    country: 'Zambezi',
    page_views: '805',
    device: 'Mobile',
    value: 70,
  },
];

const AudienceByCountry = () => {
  const { t } = useTranslation('common');

  return (
    <Panel lg={12} xl={8} md={12} title={t('Audience By Region')}>
      <Table responsive className="table--bordered dashboard__audience-table">
        <thead>
          <tr>
            {header.map(item => (
              <th key={item.id}>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(item => (
            <tr key={item.id}>
              <td>{item.country}</td>
              <td>{item.page_views}</td>
              <td>{item.device}</td>
              <td>
                <div className="progress-wrap progress-wrap--blue">
                  <Progress value={item.value}>{`${item.value}%`}</Progress>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Panel>
  );
};

export default AudienceByCountry;
