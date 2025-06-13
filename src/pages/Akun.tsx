import React, { useRef, useState } from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

const Akun = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState(() => {
    const u = JSON.parse(localStorage.getItem("currentUser") || "null");
    return u ? { ...u, phone: u.phone || "" } : null;
  });
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    photo: user?.photo || ""
  });
  if (!user) {
    navigate("/login");
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files && files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setForm((f) => ({ ...f, photo: ev.target?.result as string }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSave = () => {
    // Update user in localStorage (both currentUser and users array)
    setUser(form);
    localStorage.setItem("currentUser", JSON.stringify(form));
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const idx = users.findIndex((u: any) => u.email === user.email);
    if (idx !== -1) {
      users[idx] = { ...users[idx], ...form };
      localStorage.setItem("users", JSON.stringify(users));
    }
    setEdit(false);
  };

  const handleDeletePhoto = () => {
    setForm((f) => ({ ...f, photo: "" }));
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
          <div className="relative mb-4">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.fullName}
                className="w-24 h-24 rounded-full object-cover border-4 border-red-600"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-red-600 flex items-center justify-center text-4xl text-gray-500">
                {form.fullName ? form.fullName[0] : "?"}
              </div>
            )}
            {edit && form.photo && (
              <button
                onClick={handleDeletePhoto}
                className="absolute top-0 right-0 bg-white border border-gray-300 rounded-full p-1 text-xs hover:bg-red-100"
                title="Hapus Foto"
              >
                Hapus
              </button>
            )}
          </div>
          {edit ? (
            <>
              <input
                type="file"
                name="photo"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleChange}
                className="mb-2"
              />
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Nama Lengkap"
                className="w-full mb-2 px-3 py-2 border rounded"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full mb-2 px-3 py-2 border rounded"
              />
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="No HP"
                className="w-full mb-2 px-3 py-2 border rounded"
              />
              <div className="flex gap-2 mt-2">
                <button
                  onClick={handleSave}
                  className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
                >
                  Simpan
                </button>
                <button
                  onClick={() => { setEdit(false); setForm({ ...user }); }}
                  className="bg-gray-300 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-400 transition-colors"
                >
                  Batal
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{user.fullName}</h2>
              <p className="text-gray-600 mb-2">{user.email}</p>
              <p className="text-gray-600 mb-2">{user.phone || <span className="italic text-gray-400">Belum diisi</span>}</p>
              <button
                onClick={() => setEdit(true)}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Edit Profil
              </button>
              <button
                onClick={() => navigate(-1)}
                className="mt-2 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
              >
                Kembali
              </button>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Akun;
