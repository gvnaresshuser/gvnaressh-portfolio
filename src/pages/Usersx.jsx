import { useEffect, useState } from "react";
import API from "../services/userApi";
import Swal from "sweetalert2";
import "animate.css";
import {
  Users,
  Search,
  Mail,
  Phone,
  Building2,
  Briefcase,
  Pencil,
  Trash2,
} from "lucide-react";
import { LoaderCircle } from "lucide-react";
export default function Usersx() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const courses = [
    "ReactJS",
    "NestJS",
    "Java Spring Boot",
    "NodeJS",
    "PostgreSQL",
    "MongoDB",
    "Python",
    "Django",
    "Angular",
    "AWS",
  ];
  const getUsers = async () => {
    try {
      setLoading(true);

      const response = await API.get("/users");

      setUsers(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This user will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      background: "#1e293b",
      color: "#fff",
    });

    if (!result.isConfirmed) return;

    try {
      await API.delete(`/users/${id}`);

      Swal.fire({
        icon: "success",
        title: "Deleted Successfully",
        text: "User has been removed.",
        timer: 1500,
        showConfirmButton: false,
        background: "#1e293b",
        color: "#fff",
      });

      getUsers();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Delete Failed",
        text: error.response?.data?.message || "Something went wrong",
      });
    }
  };

  const editUser = async (user) => {
    const result = await Swal.fire({
      title: "✏️ Edit User",
      width: 700,
      background: "#0f172a",
      color: "#ffffff",

      html: `
<div style="display:flex;flex-direction:column;gap:12px">

  <input
    id="name"
    class="swal2-input"
    placeholder="Full Name"
    value="${user.name || ""}"
  />

  <input
    id="email"
    class="swal2-input"
    placeholder="Email Address"
    value="${user.email || ""}"
  />

  <input
    id="mobile"
    class="swal2-input"
    placeholder="Mobile Number"
    value="${user.mobile || ""}"
  />

  <input
    id="collegeOrCompany"
    class="swal2-input"
    placeholder="College / Company"
    value="${user.college_or_company || ""}"
  />

  <input
    id="profession"
    class="swal2-input"
    placeholder="Profession"
    value="${user.profession || ""}"
  />

  <div style="text-align:left;padding:10px;color:white">
    <strong>Interested Courses</strong>
  </div>

  <div
    style="
      max-height:200px;
      overflow-y:auto;
      text-align:left;
      border:1px solid #334155;
      border-radius:10px;
      padding:10px;
    "
  >
    ${courses
      .map(
        (course) => `
      <label style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
        <input
          type="checkbox"
          class="course-checkbox"
          value="${course}"
          ${user.interested_courses?.includes(course) ? "checked" : ""}
        />
        ${course}
      </label>
    `,
      )
      .join("")}
  </div>

</div>
`,

      showCancelButton: true,
      confirmButtonText: "Update User",
      cancelButtonText: "Cancel",

      confirmButtonColor: "#06b6d4",
      cancelButtonColor: "#6b7280",

      focusConfirm: false,

      preConfirm: () => {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const collegeOrCompany = document
          .getElementById("collegeOrCompany")
          .value.trim();
        const profession = document.getElementById("profession").value.trim();

        const interestedCourses = [
          ...document.querySelectorAll(".course-checkbox:checked"),
        ].map((checkbox) => checkbox.value);

        if (!name || !email || !mobile || !collegeOrCompany || !profession) {
          Swal.showValidationMessage("Please fill all required fields");
          return false;
        }

        return {
          name,
          email,
          mobile,
          collegeOrCompany,
          profession,
          interestedCourses,
        };
      },
    });

    if (!result.isConfirmed) return;

    try {
      await API.put(`/users/${user.id}`, result.value);

      Swal.fire({
        title: "✅ Updated!",
        html: `
    <div style="font-size:16px">
      User information has been saved successfully.
    </div>
  `,
        icon: "success",
        background: "#0f172a",
        color: "#fff",
        iconColor: "#10b981",
        timer: 2500,
        timerProgressBar: true,
        showConfirmButton: false,
        backdrop: `
    rgba(0,0,0,0.7)
    left top
    no-repeat
  `,
        showClass: {
          popup: "animate__animated animate__bounceIn",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });

      getUsers();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: error.response?.data?.message || "Something went wrong",
      });
    }
  };

  const filteredUsers = users.filter((user) =>
    `${user.name}
   ${user.email}
   ${user.mobile}
   ${user.college_or_company}
   ${user.profession}
   ${user.interested_courses?.join(" ")}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {loading && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center z-50">
            <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>

            <p className="mt-4 text-white text-lg font-semibold">
              Loading Users...
            </p>
          </div>
        )}
        {/* {loading && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center z-50">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-cyan-500/30 rounded-full"></div>

              <div className="absolute top-0 left-0 w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
            </div>

            <h2 className="mt-6 text-2xl font-bold text-white">
              Loading Users
            </h2>

            <p className="text-cyan-300 mt-2">Please wait...</p>
          </div>
        )} */}
        {/*   {loading && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 flex flex-col items-center shadow-2xl">
              <LoaderCircle size={60} className="animate-spin text-cyan-600" />

              <p className="mt-4 text-gray-700 font-semibold">
                Loading Users...
              </p>
            </div>
          </div>
        )} */}
        {/*  {loading && (
          <div className="fixed inset-0 bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-900 flex items-center justify-center z-50">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 flex flex-col items-center shadow-2xl">
              <LoaderCircle size={70} className="animate-spin text-cyan-300" />

              <h2 className="mt-6 text-2xl font-bold text-white">
                Loading Users
              </h2>

              <p className="mt-2 text-cyan-200">
                Please wait while we fetch the data...
              </p>
            </div>
          </div>
        )} */}

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white">Registered Users</h1>

            <p className="text-cyan-200 mt-2">
              Manage students and professionals
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-4 shadow-xl">
            <div className="flex items-center gap-3">
              <Users className="text-cyan-300" />

              <div>
                <p className="text-sm text-gray-300">Total Users</p>

                <h2 className="text-3xl font-bold text-white">
                  {users.length}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 mb-6">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-3.5 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 p-3 rounded-xl bg-white text-gray-800 focus:outline-none"
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-white/20 text-white">
                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Mobile</th>
                  <th className="p-4 text-left">Company</th>
                  <th className="p-4 text-left">Profession</th>
                  <th className="p-4 text-left">Interested Courses</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`text-white hover:bg-white/10 transition ${
                      index % 2 === 0 ? "bg-white/5" : ""
                    }`}
                  >
                    <td className="p-4">{user.id}</td>

                    <td className="p-4 font-semibold">{user.name}</td>

                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Mail size={16} />
                        {user.email}
                      </div>
                    </td>

                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Phone size={16} />
                        {user.mobile}
                      </div>
                    </td>

                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Building2 size={16} />
                        {user.college_or_company}
                      </div>
                    </td>

                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} />
                        {user.profession}
                      </div>
                    </td>

                    <td className="p-4">
                      <div className="flex flex-wrap gap-2">
                        {user.interested_courses?.map((course, index) => (
                          <span
                            key={index}
                            className="bg-cyan-500/20 text-cyan-200 px-2 py-1 rounded-lg text-xs"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="p-4">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => editUser(user)}
                          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl transition"
                        >
                          <Pencil size={16} />
                          Edit
                        </button>

                        <button
                          onClick={() => deleteUser(user.id)}
                          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition"
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredUsers.length === 0 && (
                  <tr>
                    <td colSpan="8" className="text-center text-white py-10">
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
