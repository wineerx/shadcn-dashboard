import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Typography } from '@/components/ui/typography';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DatePickerWithRange as Datepicker } from '@/components/ui/datepicker'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,

} from "@/components/ui/card"

import { Navigation } from '@/components/Navigation';

import { DollarSign, UsersRound, CreditCard, Activity } from 'lucide-react';
import ApexChart from '@/components/ui/chart'


function App() {
  const listUsers = [
    {
      name: 'Olivia Martin',
      mail: 'olivia.martin@email.com',
      value: '+$1,999.00'
    },
    {
      name: 'Jaskcon Lee',
      mail: 'jaskcon.lee@email.com',
      value: '+39.00'
    },
    {
      name: 'Isabella Nguyen',
      mail: 'isabella.nguyen@email.com',
      value: '+$299.00'
    },
    {
      name: 'William Kim',
      mail: 'william.kim@email.com',
      value: '+$99.00'
    },
    {
      name: 'Sofia Davis',
      mail: 'sofia.davis@email.com',
      value: '+$39.00'
    }
  ]

  return (
    <>
      <div className={'flex items-center  justify-center h-screen w-screen font-sans'}>
        <div className='w-[1300px] h-[817px] rounded-[0.5rem] border border-border/80 '>
          <header className='flex h-16 items-center px-4 border-b justify-between'>

            <div className='flex gap-4'>
              <Button variant="ghost" className="flex gap-2 w-[200px] justify-start ">
                <Avatar className='w-5 h-5'>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                Alicia Koch
              </Button>

              <Navigation.Root>
                <Navigation.Link active path='/'>Overview</Navigation.Link>
                <Navigation.Link path='/customers'>Customers</Navigation.Link>
                <Navigation.Link path='/products'>Products</Navigation.Link>
                <Navigation.Link path='/settings'>Settings</Navigation.Link>
              </Navigation.Root>
            </div>


            <div className='flex items-center gap-4'>
              <Input type="email" placeholder="Email" />

              <Avatar className='w-8 h-8'>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

            </div>
          </header>
          <main className='w-full flex-1 space-y-4 p-8 pt-6'>
            <div className='flex justify-between'>
              <Typography variant={'h2'}>Dashboard</Typography>
              <div className='flex gap-2'>
                <Datepicker />
                <Button>Download</Button>
              </div>
            </div>
            <section>
              <Tabs defaultValue="Overview" className="">
                <TabsList>
                  <TabsTrigger value="Overview">Overview</TabsTrigger>
                  <TabsTrigger value="Analytics" disabled>Analytics</TabsTrigger>
                  <TabsTrigger value="Reports" disabled>Reports</TabsTrigger>
                  <TabsTrigger value="Notifications" disabled>Notifications</TabsTrigger>
                </TabsList>

                <TabsContent className='flex flex-wrap w-full mt-4 gap-4' value="Overview">
                  <div className='flex gap-4'>
                    <Card className='flex flex-col gap-2 w-[296px] h-[128px]'>
                      <div className='flex items-center justify-between'>
                        <Typography variant={'h3'}>Total Revenue</Typography>
                        <DollarSign size={16} />
                      </div>

                      <div className='flex items-center justify-between'>
                        <div className='flex flex-col'>
                          <Typography variant={'h2'}>$45,231.89</Typography>
                          <Typography variant={'p'}>+20.1% from last month</Typography>
                        </div>
                      </div>


                    </Card>

                    <Card className='flex flex-col gap-2 w-[296px] h-[128px]'>
                      <div className='flex items-center justify-between'>
                        <Typography variant={'h3'}>Subscriptions</Typography>
                        <UsersRound size={16} />
                      </div>

                      <div className='flex items-center justify-between'>
                        <div className='flex flex-col'>
                          <Typography variant={'h2'}>+2350</Typography>
                          <Typography variant={'p'}>+180.1% from last month</Typography>
                        </div>
                      </div>
                    </Card>

                    <Card className='flex flex-col gap-2 w-[296px] h-[128px]'>
                      <div className='flex items-center justify-between'>
                        <Typography variant={'h3'}>Sales</Typography>
                        <CreditCard size={16} />
                      </div>

                      <div className='flex items-center justify-between'>
                        <div className='flex flex-col'>
                          <Typography variant={'h2'}>+12,234</Typography>
                          <Typography variant={'p'}>+19% from last month</Typography>
                        </div>
                      </div>


                    </Card>

                    <Card className='flex flex-col gap-2 w-[296px] h-[128px]'>
                      <div className='flex items-center justify-between'>
                        <Typography variant={'h3'}>Active Now</Typography>
                        <Activity size={16} />
                      </div>

                      <div className='flex items-center justify-between'>
                        <div className='flex flex-col'>
                          <Typography variant={'h2'}>+573</Typography>
                          <Typography variant={'p'}>+20.1% from last month</Typography>
                        </div>
                      </div>


                    </Card>
                  </div>

                  <div className='flex flex-wrap gap-4'>
                    <Card className='flex flex-col gap-2 px-6 pb-1'>
                      <Typography variant={'h3'}>Overview</Typography>
                      <ApexChart />
                    </Card>



                    <Card className='flex flex-col gap-y-6'>
                      <div>
                        <Typography variant={'h3'}>Recent Sales</Typography>
                        <Typography variant={'p'}>You made 265 sales this month.</Typography>
                      </div>
                      {listUsers.map((data, i) => (

                        <div className='flex flex-wrap items-center w-[490px] justify-between '>
                          <div className='flex gap-4'>
                            <Avatar className='w-9 h-9'>
                              <AvatarImage src={`https://ui.shadcn.com/avatars/0${i}.png`} />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                            <div>
                              <Typography variant={'h3'}>{data.name}</Typography>
                              <Typography variant={'p'}>{data.mail}</Typography>
                            </div>

                          </div>


                          <Typography variant={'h3'}>{data.value}</Typography>

                        </div>



                      ))}

                    </Card>



                  </div>


                </TabsContent>

              </Tabs>

            </section>


          </main>

        </div>
      </div>

    </>
  )
}

export default App
