
import {Tabs} from '@mantine/core';
// import {  MdLocalPharmacy } from '@tabler/icons-react';
import Viewpharmacy from './inventory/viewPharmacy';
import ViewInventory from './inventory/viewInventory';
import {MdLocalPharmacy,MdOutlineInventory} from  'react-icons/md'

export default function DoctorPharmacyInvt() {


  return (
    <>
    <Tabs  color="violet"  variant="pills" radius="md" defaultValue="pharmacy">
      <Tabs.List>
        <Tabs.Tab value="pharmacy" icon={<MdLocalPharmacy size="0.8rem" />}>View Pharmacy</Tabs.Tab>
        <Tabs.Tab value="inventory" icon={<MdOutlineInventory size="0.8rem" />}>View Inventory</Tabs.Tab>
       
      </Tabs.List>

      <Tabs.Panel value="pharmacy" pt="xs">
        <Viewpharmacy/>
      </Tabs.Panel>

      <Tabs.Panel value="inventory" pt="xs">
        <ViewInventory/>
      </Tabs.Panel>

     
    </Tabs>
    </>
  );
}
