import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Newspaper, Stethoscope, Users, FileText, LogOut, ClipboardList } from "lucide-react"

export default async function AdminDashboard() {
  const supabase = await createClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Админ панель</h1>
          <form action="/api/auth/logout" method="post">
            <Button variant="outline" size="sm">
              <LogOut className="mr-2 h-4 w-4" />
              Шығу
            </Button>
          </form>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/admin/news">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Newspaper className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Хабарландырулар</CardTitle>
                <CardDescription>Жаңалықтарды басқару</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/admin/services">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Stethoscope className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Қызметтер</CardTitle>
                <CardDescription>Қызметтер мен бағаларды басқару</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/admin/doctors">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Users className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Дәрігерлер</CardTitle>
                <CardDescription>Дәрігерлер туралы ақпаратты басқару</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/admin/content">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <FileText className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Мазмұн</CardTitle>
                <CardDescription>Сайт мазмұнын басқару</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/admin/board">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <ClipboardList className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Байқаушы кеңес</CardTitle>
                <CardDescription>Хаттамалар мен PDF-тер</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  )
}
