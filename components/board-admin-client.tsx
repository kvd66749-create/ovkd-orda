"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Pencil, Plus, Trash2 } from "lucide-react"

type BoardProtocol = {
  id: string
  slug: string
  title: string
  description: string | null
  meeting_date: string | null
  pdf_url: string | null
}

const emptyForm = {
  slug: "",
  title: "",
  description: "",
  meeting_date: "",
  pdf_url: "",
}

export function BoardAdminClient({ initialProtocols }: { initialProtocols: BoardProtocol[] }) {
  const [protocols, setProtocols] = useState<BoardProtocol[]>(initialProtocols)
  const [form, setForm] = useState(emptyForm)
  const [isEditing, setIsEditing] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const supabase = createClient()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const payload = {
      slug: form.slug.trim(),
      title: form.title.trim(),
      description: form.description.trim() || null,
      meeting_date: form.meeting_date || null,
      pdf_url: form.pdf_url.trim() || null,
    }

    if (!payload.slug || !payload.title) {
      alert("Slug пен тақырып міндетті")
      return
    }

    if (editingId) {
      const { error } = await supabase.from("board_protocols").update(payload).eq("id", editingId)
      if (error) {
        alert("Қате: " + error.message)
        return
      }
    } else {
      const { error } = await supabase.from("board_protocols").insert([payload])
      if (error) {
        alert("Қате: " + error.message)
        return
      }
    }

    resetForm()
    router.refresh()
  }

  const handleEdit = (protocol: BoardProtocol) => {
    setForm({
      slug: protocol.slug,
      title: protocol.title,
      description: protocol.description || "",
      meeting_date: protocol.meeting_date || "",
      pdf_url: protocol.pdf_url || "",
    })
    setEditingId(protocol.id)
    setIsEditing(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Бұл жазбаны өшіргіңіз келетініне сенімдісіз бе?")) return

    const { error } = await supabase.from("board_protocols").delete().eq("id", id)
    if (error) {
      alert("Қате: " + error.message)
      return
    }

    router.refresh()
  }

  const resetForm = () => {
    setForm(emptyForm)
    setIsEditing(false)
    setEditingId(null)
  }

  useEffect(() => {
    setProtocols(initialProtocols)
  }, [initialProtocols])

  return (
    <div className="space-y-6">
      <Button onClick={() => setIsEditing(!isEditing)}>
        <Plus className="mr-2 h-4 w-4" />
        {isEditing ? "Форманы жабу" : "Жаңа жазба қосу"}
      </Button>

      {isEditing && (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? "Жазбаны өңдеу" : "Жаңа хаттама"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="slug">Slug (URL)</Label>
                  <Input
                    id="slug"
                    value={form.slug}
                    onChange={(e) => setForm({ ...form, slug: e.target.value })}
                    placeholder="protocol-1-2025"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="meeting_date">Күні</Label>
                  <Input
                    id="meeting_date"
                    type="date"
                    value={form.meeting_date}
                    onChange={(e) => setForm({ ...form, meeting_date: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="title">Тақырып</Label>
                <Input
                  id="title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Сипаттама</Label>
                <Textarea
                  id="description"
                  rows={4}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Қысқаша мазмұн..."
                />
              </div>

              <div>
                <Label htmlFor="pdf_url">PDF сілтемесі</Label>
                <Input
                  id="pdf_url"
                  value={form.pdf_url}
                  onChange={(e) => setForm({ ...form, pdf_url: e.target.value })}
                  placeholder="/publicтағы-файл.pdf немесе https://..."
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit">{editingId ? "Сақтау" : "Қосу"}</Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Болдырмау
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {protocols.map((protocol) => (
          <Card key={protocol.id}>
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">/{protocol.slug}</p>
                  <h3 className="text-lg font-semibold">{protocol.title}</h3>
                  {protocol.meeting_date && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {new Intl.DateTimeFormat("kk-KZ", { dateStyle: "long" }).format(new Date(protocol.meeting_date))}
                    </p>
                  )}
                  {protocol.description && <p className="mt-2 text-muted-foreground">{protocol.description}</p>}
                  {protocol.pdf_url && (
                    <a href={protocol.pdf_url} className="text-sm text-cyan-700 underline mt-2 inline-block" target="_blank">
                      PDF сілтемесі
                    </a>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(protocol)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(protocol.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {protocols.length === 0 && <p className="text-sm text-muted-foreground">Пока ешқандай хаттама жоқ.</p>}
      </div>
    </div>
  )
}

