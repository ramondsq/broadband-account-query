"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

const kinds = ['@ydyx', '@dx', '@tch', "@stu"]

export function BandwidthAccountQuery() {
  const [username, setUsername] = useState("")
  const [kind, setKind] = useState("0")
  const [result, setResult] = useState("")
  const { toast } = useToast()

  const query = () => {
    let res = '{SRUN2}'
    for (let i = 0; i < username.length; i++) {
      res += String.fromCharCode(username.charCodeAt(i) + 4)
    }
    res += kinds[parseInt(kind)]
    setResult(res)
  }

  const copy = () => {
    navigator.clipboard.writeText(result).then(() => {
      toast({
        title: "复制成功",
        description: "宽带账号已复制到剪贴板",
      })
    })
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>查询宽带账号</CardTitle>
        <CardDescription>请输入学号并选择账号类型</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">学号</Label>
          <Input
            id="username"
            placeholder="请输入学号"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="kind">账号类型</Label>
          <Select value={kind} onValueChange={setKind}>
            <SelectTrigger>
              <SelectValue placeholder="选择账号类型" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">移动</SelectItem>
              <SelectItem value="1">电信</SelectItem>
              <SelectItem value="2">教工</SelectItem>
              <SelectItem value="3">学生</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button onClick={query} className="w-full">查询</Button>
        {result && (
          <div className="w-full text-center space-y-2">
            <p>宽带账号为：</p>
            <h6 className="text-lg font-bold">{result}</h6>
            <Button onClick={copy} variant="outline" className="w-full">
              复制
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}