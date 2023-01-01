import { ContentLayout } from '../../../layouts';
import { CustomDetailForm } from '../../../components';
import { useDetailTab } from '../../../hooks';
import { proTab } from '../../../constansts';
import { BasicInfo } from '../components';

export default function BookingDetail() {
  const { value, handleTabChange, TabPanel } = useDetailTab();

  return (
    <ContentLayout title="프로 상세">
      <CustomDetailForm
        value={value}
        tabs={proTab}
        onTabChange={handleTabChange}
      >
        {proTab.map((tab: any, i: number) => {
          return (
            <TabPanel key={i} value={value} index={tab.id}>
              {tab.id === 0 && <BasicInfo />}
              {/* {tab.id === 1 && <MedicalCharts />} */}
            </TabPanel>
          );
        })}
      </CustomDetailForm>
    </ContentLayout>
  );
}
