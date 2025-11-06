import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartPie } from 'lucide-react'

export default function Home() {
  return(
    <>
      {/* Stat Cards on Home Page*/}
      <div className="grid grid-cols-[525px_1fr_1fr] gap-5 mt-8 p-5">
        <Card className='shadow-xl hover:scale-105 transition-all duration-700'>
            <CardHeader className="w-100 bg-green-800 rounded-t-lg border-b-2 border-gray-500 pb-2">
              <CardTitle className="text-center font-semibold text-[#F9F5EF]">Monthly Net</CardTitle>
              <CardDescription className="text-semibold text-center text-[#F9F5EF]">Graph of your savings and expenses these few months</CardDescription>
            </CardHeader>
            <CardContent className="pt-3">
              <h1 className='text-5xl text-center dark:text-[#F9F5EF]'>$20K Lorem ipsum dolor sit amet.</h1>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button type="submit"  className="flex flex-col gap-3 bg-green-700 text-foreground/80 text-[#F9F5EF] hover:text-foreground hover:bg-green-500 hover:scale-105 transition-all duration-500">Check 3 months</Button>
              <Button type="submit"  className="flex flex-col gap-3 bg-green-700 text-foreground/80 text-[#F9F5EF] hover:text-foreground hover:bg-green-500 hover:scale-105 transition-all duration-500">Check 6 months</Button>
            </CardFooter>
        </Card>
        <Card className='shadow-xl hover:scale-105 transition-all duration-700'>
            <CardHeader className="w-100 bg-green-800 rounded-t-lg border-b-2 border-gray-500">
              <CardTitle>
                <div className="flex gap-4 items-center">
                  <ChartPie size={25} className="text-[#F9F5EF]"/> 
                  <h1 className='text-center justify-self-center text-[#F9F5EF]'>Income Breakdown</h1>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
                <h1 className='text-5xl text-center mt-16 dark:text-[#F9F5EF]'>$14.7K</h1>
            </CardContent>
        </Card>
        <Card className='shadow-xl hover:scale-105 transition-all duration-700'>
          <CardHeader className="w-100 bg-green-800 rounded-t-lg border-b-2 border-gray-500">
              <CardTitle>
                <div className="flex gap-4 items-center">
                  <ChartPie size={25} className="text-[#F9F5EF]"/> 
                  <h1 className='text-center justify-self-center text-[#F9F5EF]'>Expenses Breakdown</h1>
                </div>
              </CardTitle>
          </CardHeader>
          <CardContent>
                <h1 className='text-5xl text-center mt-16 dark:text-[#F9F5EF]'>$5.3K</h1>
          </CardContent>  
        </Card>
      </div>
      {/* End of Stat Cards */}

      {/* Recent Transactions */}
      <div className="border-b-[1.5px] border-gray-500 dark:border-white mx-5 mt-10">
        <h2 className="text-2xl">Recent Transactions</h2>
      </div>
      <div>

      </div>
    </>
  );
}

