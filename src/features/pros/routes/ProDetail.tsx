import { useParams } from 'react-router-dom';
import { ContentLayout } from '../../../layouts';
import { CustomDetailForm } from '../../../components';
import { useDetailTab } from '../../../hooks';
import { proTab } from '../../../constansts';
import { BasicInfo } from '../components';
import { usePro } from '../api';

export default function ProDetail() {
  const { id } = useParams();
  const proId = id || '';
  const { value, handleTabChange, TabPanel } = useDetailTab();
  const { isLoading, data } = usePro({ proId });

  return (
    <ContentLayout title="프로 상세">
      <CustomDetailForm
        value={value}
        tabs={proTab}
        onTabChange={handleTabChange}
        loading={isLoading}
      >
        {proTab.map((tab: any, i: number) => {
          return (
            <TabPanel key={i} value={value} index={tab.id}>
              {tab.id === 0 && <BasicInfo detail={data} />}
              {/* {tab.id === 1 && <MedicalCharts />} */}
            </TabPanel>
          );
        })}
      </CustomDetailForm>
    </ContentLayout>
  );
}
