/* eslint-disable react/jsx-props-no-spreading */
import { useParams } from 'react-router-dom';
import { ContentLayout } from '../../../layouts';
import { CustomDetailForm } from '../../../components';
import { useDetailTab, useModal } from '../../../hooks';
import { proTab } from '../../../constansts';
import { BasicInfo, UpdatePro } from '../components';

export default function ProFormDetail() {
  const { id } = useParams();
  const proId = id || '';
  const { value, handleTabChange, TabPanel } = useDetailTab();
  const modal = useModal();
  // const { isLoading, data } = usePro({ proId });
  const dummy = {
    proId: 'asdf',
    name: 'asdf',
    phoneNumber: 'asdf',
    description: 'ㅁㄴㅇㄹ',
  };

  return (
    <ContentLayout title="프로 상세 입점 폼" isUpdateButton {...modal}>
      <CustomDetailForm
        value={value}
        tabs={proTab}
        onTabChange={handleTabChange}
        // loading={isLoading}
      >
        <UpdatePro proId={proId} {...modal} detail={dummy} />
        {proTab.map((tab: any, i: number) => {
          return (
            <TabPanel key={i} value={value} index={tab.id}>
              {tab.id === 0 && <BasicInfo detail={dummy} />}
              {/* {tab.id === 1 && <MedicalCharts />} */}
            </TabPanel>
          );
        })}
      </CustomDetailForm>
    </ContentLayout>
  );
}
