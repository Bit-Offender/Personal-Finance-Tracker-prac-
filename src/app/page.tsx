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
    <div className="grid grid-cols-[525px_1fr_1fr] gap-5 mt-8 p-5">
      <Card className='shadow-xl hover:scale-105 transition-all duration-700'>
          <CardHeader>
            <CardTitle className="text-center">Monthly Net</CardTitle>
            <CardDescription className="text-semibold text-center">Graph of your savings and expenses these few months</CardDescription>
          </CardHeader>
          <CardContent>
            <h1 className='text-5xl text-center'>$20K Lorem ipsum dolor sit amet.</h1>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button type="submit"  className="flex flex-col gap-3 bg-green-400 text-foreground/80 text-black hover:text-foreground hover:bg-green-500">Check 3 months</Button>
            <Button type="submit"  className="flex flex-col gap-3 bg-green-400 text-foreground/80 text-black hover:text-foreground hover:bg-green-500">Check 6 months</Button>
          </CardFooter>
      </Card>
      <Card className='shadow-xl hover:scale-105 transition-all duration-700'>
          <CardHeader>
            <CardTitle>
              <div className="flex gap-4 items-center">
                <ChartPie size={25}/> 
                <h1 className='text-center justify-self-center'>Income Breakdown</h1>
              </div>
            </CardTitle>
            <CardContent>
              <h1 className='text-5xl text-center mt-16'>$14.7K</h1>
            </CardContent>
          </CardHeader>
      </Card>
      <Card className='shadow-xl hover:scale-105 transition-all duration-700'>
        <CardHeader>
            <CardTitle>
              <div className="flex gap-4 items-center">
                <ChartPie size={25}/> 
                <h1 className='text-center justify-self-center'>Expenses Breakdown</h1>
              </div>
            </CardTitle>
            <CardContent>
              <h1 className='text-5xl text-center mt-16'>$5.3K</h1>
            </CardContent>
          </CardHeader>
      </Card>
    </div>
  );
}

